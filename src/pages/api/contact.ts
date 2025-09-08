// src/pages/api/contact.ts
import { Resend } from 'resend';

// This page must be server-rendered (not pre-rendered) so the function runs on Vercel.
export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

type Body = {
  name?: string;
  email?: string;
  message?: string;
  // simple honeypot
  company?: string;
};

export async function POST({ request }: { request: Request }) {
  try {
    let body: Body = {};

    const ct = request.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      body = await request.json();
    } else if (ct.includes('application/x-www-form-urlencoded')) {
      const form = await request.formData();
      body = Object.fromEntries(form) as any;
    } else {
      const form = await request.formData();
      body = Object.fromEntries(form) as any;
    }

    const name = (body.name || '').toString().trim();
    const email = (body.email || '').toString().trim();
    const message = (body.message || '').toString().trim();
    const honeypot = (body.company || '').toString().trim(); // should be empty

    // Basic validation
    if (honeypot) return new Response(JSON.stringify({ ok: true }), { status: 200 }); // silently accept bots
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing required fields.' }), { status: 400 });
    }

    // Send via Resend
    await resend.emails.send({
      from: 'BLUTA Website <onboarding@resend.dev>', // replace after verifying your domain in Resend
      to: 'enquiry@blutech.io',
      reply_to: email, // so you can reply directly to the sender
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:ui-sans-serif">
          <h2>New Contact Enquiry</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b></p>
          <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: 'Failed to send email.' }), { status: 500 });
  }
}

// Small helper to avoid HTML injection in the email
function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (ch) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]!
  ));
}
