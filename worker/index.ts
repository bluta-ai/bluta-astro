/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY?: string;
  EMAIL_FETCH?: typeof fetch;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const contactRecipient = "enquiry@blutech.io";
const contactSender = "Blutech Website <website@contact.blutech.io>";

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

function cleanField(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

async function handleContact(request: Request, env: Env) {
  if (request.method !== "POST") {
    return jsonResponse({ success: false, error: "Method not allowed" }, 405);
  }

  const origin = request.headers.get("Origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return jsonResponse({ success: false, error: "Invalid request origin" }, 403);
      }
    } catch {
      return jsonResponse({ success: false, error: "Invalid request origin" }, 403);
    }
  }

  const contentLength = Number(request.headers.get("Content-Length") || 0);
  if (contentLength > 24_000) {
    return jsonResponse({ success: false, error: "Request is too large" }, 413);
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json() as Record<string, unknown>;
  } catch {
    return jsonResponse({ success: false, error: "Invalid request" }, 400);
  }

  // Hidden form field: automated submissions are accepted but never emailed.
  if (cleanField(input.website, 200)) {
    return jsonResponse({ success: true });
  }

  const fields = {
    name: cleanField(input.name, 120),
    company: cleanField(input.company, 160),
    email: cleanField(input.email, 254).toLowerCase(),
    role: cleanField(input.role, 160),
    type: cleanField(input.type, 180),
    location: cleanField(input.location, 180),
    improve: cleanField(input.improve, 4_000),
    timing: cleanField(input.timing, 300),
    language: cleanField(input.language, 20) || "en",
    page: cleanField(input.page, 500),
  };

  if (!fields.name || !fields.company || !fields.email || !fields.type || !fields.location || !fields.improve) {
    return jsonResponse({ success: false, error: "Please complete the required fields" }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return jsonResponse({ success: false, error: "Please enter a valid email address" }, 400);
  }
  if (!env.RESEND_API_KEY) {
    return jsonResponse({ success: false, error: "Email service is not configured" }, 503);
  }

  const rows = [
    ["Name", fields.name],
    ["Company", fields.company],
    ["Work email", fields.email],
    ["Role", fields.role || "—"],
    ["Property / project type", fields.type],
    ["Location", fields.location],
    ["What they want to improve", fields.improve],
    ["Project timing", fields.timing || "—"],
    ["Website language", fields.language],
    ["Source page", fields.page || "—"],
  ] as const;
  const text = rows.map(([label, value]) => `${label}:\n${value}`).join("\n\n");
  const html = `<h1 style="font:600 22px Arial,sans-serif;color:#0a1619">New Blutech project enquiry</h1><table style="border-collapse:collapse;width:100%;font:14px Arial,sans-serif;color:#233336">${rows.map(([label, value]) => `<tr><th style="width:190px;padding:12px 16px 12px 0;border-bottom:1px solid #dce2df;text-align:left;vertical-align:top;color:#287e7b">${escapeHtml(label)}</th><td style="padding:12px 0;border-bottom:1px solid #dce2df;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join("")}</table>`;

  try {
    const emailResponse = await (env.EMAIL_FETCH || fetch)("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: [contactRecipient],
        from: contactSender,
        reply_to: fields.email,
        subject: `Website enquiry — ${fields.company}`,
        text,
        html,
      }),
    });
    const result = await emailResponse.json().catch(() => ({})) as { id?: string; message?: string };
    if (!emailResponse.ok || !result.id) {
      console.error("Contact email failed", { status: emailResponse.status, message: result.message || "unknown" });
      return jsonResponse({ success: false, error: "We could not send your enquiry. Please email enquiry@blutech.io." }, 502);
    }
    return jsonResponse({ success: true, messageId: result.id }, 201);
  } catch (error) {
    const name = error instanceof Error ? error.name : "unknown";
    console.error("Contact email failed", { name });
    return jsonResponse({ success: false, error: "We could not send your enquiry. Please email enquiry@blutech.io." }, 502);
  }
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      return handleContact(request, env);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
