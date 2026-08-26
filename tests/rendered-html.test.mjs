import assert from "node:assert/strict";
import test from "node:test";

const workerPromise = (async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  return (await import(workerUrl.href)).default;
})();

async function fetchPath(path) {
  const worker = await workerPromise;
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("homepage renders the approved proposition and evidence hierarchy", async () => {
  const response = await fetchPath("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Intelligence, built into the building/);
  assert.match(html, /100\+/);
  assert.match(html, /200,000\+/);
  assert.match(html, /connected devices on Blutech Core/);
  assert.match(html, /Three Garden Road/);
  assert.doesNotMatch(html, /THREE GARDEN ROAD · LIVE/);
  assert.doesNotMatch(html, /if-award\.webp/);
  assert.match(html, /Awarded/);
  assert.match(html, /Multiple international and Hong Kong awards/);
  assert.doesNotMatch(html, /74 monitored/i);
  assert.doesNotMatch(html, /codex-preview/i);
});

test("route-based Traditional Chinese and Arabic pages render", async () => {
  const traditionalChinese = await fetchPath("/zh-hant");
  assert.equal(traditionalChinese.status, 200);
  assert.match(await traditionalChinese.text(), /讓智慧/);

  const arabic = await fetchPath("/ar");
  assert.equal(arabic.status, 200);
  assert.match(await arabic.text(), /ذكاء/);

  const traditionalChineseCase = await fetchPath("/zh-hant/projects/three-garden-road");
  assert.match(await traditionalChineseCase.text(), /超過 1,000 部連接設備/);

  const arabicProduct = await fetchPath("/ar/products/bt338-heatmap-fusion");
  assert.match(await arabicProduct.text(), /دمج حراري وموجات مليمترية/);
});

test("confirmed flagship project routes are available", async () => {
  for (const path of [
    "/projects/metroplaza",
    "/projects/hong-kong-west-kowloon-station",
    "/projects/olympian-city",
    "/projects/hospital-patient-safety",
    "/projects/immigration-department-queue-monitoring",
  ]) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
  }
});

test("project naming, imagery and detail structure match the launch brief", async () => {
  const projects = await fetchPath("/projects");
  const projectsHtml = await projects.text();
  assert.match(projectsHtml, />Olympian City</);
  assert.doesNotMatch(projectsHtml, />Olympian City 1, 2 &amp; 3</);
  assert.match(projectsHtml, /project-olympian-city\.webp/);
  assert.match(projectsHtml, /project-metroplaza\.webp/);
  assert.match(projectsHtml, /Immigration Department Headquarters/);

  const olympian = await fetchPath("/projects/olympian-city");
  const olympianHtml = await olympian.text();
  assert.doesNotMatch(olympianHtml, /Project KPIs/);
  assert.doesNotMatch(olympianHtml, /case-kpis/);

  const company = await fetchPath("/company");
  const companyHtml = await company.text();
  assert.match(companyHtml, /office-songshan-lake\.webp/);
  assert.match(companyHtml, /https:\/\/www\.bluta\.io\/en\//);
});

test("BT107 uses its confirmed public name and keeps the legacy URL working", async () => {
  const product = await fetchPath("/products/bt107-smart-display");
  assert.equal(product.status, 200);
  const html = await product.text();
  assert.match(html, /BT107/);
  assert.match(html, /Smart Display/);
  assert.doesNotMatch(html, /Smart TV Display/);

  const legacy = await fetchPath("/products/bt107-smart-tv-display");
  assert.equal(legacy.status, 308);
  assert.equal(legacy.headers.get("location"), "http://localhost/products/bt107-smart-display");

  const localizedLegacy = await fetchPath("/zh-hant/products/bt107-smart-tv-display");
  assert.equal(localizedLegacy.status, 308);
  assert.equal(localizedLegacy.headers.get("location"), "http://localhost/zh-hant/products/bt107-smart-display");
});

test("sitemap publishes every English and localized public route", async () => {
  const sitemap = await fetchPath("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  const urls = [...xml.matchAll(/<loc>https:\/\/blutech\.io([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
  assert.equal(urls.length, 168);
  for (const path of [
    "/zh-hant/products/bt107-smart-display",
    "/zh-hans/projects/olympian-city",
    "/ar/projects/hospital-patient-safety",
  ]) assert.ok(urls.includes(path), path);
  for (const path of urls) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
  }
});

test("localized pages expose canonical and hreflang links", async () => {
  const response = await fetchPath("/zh-hant/projects/three-garden-road");
  const html = await response.text();
  assert.match(html, /rel="canonical" href="https:\/\/blutech\.io\/zh-hant\/projects\/three-garden-road"/);
  assert.match(html, /hrefLang="zh-Hans" href="https:\/\/blutech\.io\/zh-hans\/projects\/three-garden-road"/);
  assert.match(html, /hrefLang="x-default" href="https:\/\/blutech\.io\/projects\/three-garden-road"/);
});

test("software, technology, solutions, resources and contact are genuinely localized", async () => {
  const checks = [
    ["/zh-hant/software", /Halo 支援日常營運/],
    ["/ar/technology", /ذكاء الحافة/],
    ["/zh-hans/solutions", /更好的运营/],
    ["/ar/resources", /معرفة عملية/],
    ["/zh-hant/contact", /提交查詢/],
  ];
  for (const [path, pattern] of checks) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), pattern, path);
  }
});

test("contact endpoint emails the fixed Blutech project address", async () => {
  const worker = await workerPromise;
  const sent = [];
  const response = await worker.fetch(
    new Request("https://blutech.io/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: "https://blutech.io" },
      body: JSON.stringify({
        name: "Test Contact",
        company: "Example Property",
        contact: "contact@example.com",
        message: "Improve operational visibility",
        language: "en",
        page: "https://blutech.io/contact",
      }),
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      RESEND_API_KEY: "test-key",
      EMAIL_FETCH: async (url, init) => {
        sent.push({ url, init, body: JSON.parse(String(init.body)) });
        return Response.json({ id: "test-message" });
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(response.status, 201);
  assert.deepEqual(await response.json(), { success: true, messageId: "test-message" });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].url, "https://api.resend.com/emails");
  assert.equal(sent[0].init.headers.Authorization, "Bearer test-key");
  assert.deepEqual(sent[0].body.to, ["enquiry@blutech.io"]);
  assert.equal(sent[0].body.from, "Blutech Website <website@contact.blutech.io>");
  assert.equal(sent[0].body.reply_to, "contact@example.com");
});

test("every published page has valid internal links and structured data", async () => {
  const sitemap = await fetchPath("/sitemap.xml");
  const xml = await sitemap.text();
  const paths = [...xml.matchAll(/<loc>https:\/\/blutech\.io([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
  const published = new Set(paths.map((path) => path.replace(/\/$/, "") || "/"));
  const linked = new Set();

  for (const path of paths) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.doesNotMatch(html, /74 monitored/i, path);
    assert.doesNotMatch(html, /BT102N/i, path);

    for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
      assert.doesNotThrow(() => JSON.parse(match[1]), `${path} has invalid JSON-LD`);
    }

    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const target = match[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
      if (!target.startsWith("/_") && !target.includes(".")) linked.add(target);
    }
  }

  for (const target of linked) {
    if (published.has(target)) continue;
    const response = await fetchPath(target);
    assert.ok(response.status === 200 || response.status === 308, `${target} returned ${response.status}`);
  }
});

test("localized product and project detail pages do not fall back to English interface copy", async () => {
  const sitemap = await fetchPath("/sitemap.xml");
  const xml = await sitemap.text();
  const paths = [...xml.matchAll(/<loc>https:\/\/blutech\.io([^<]*)<\/loc>/g)].map((match) => match[1] || "/");
  const localizedDetails = paths.filter((path) => /^\/(zh-hant|zh-hans|ar)\/(products|projects)\//.test(path));
  const forbiddenInterfaceCopy = /Functional diagram|What this product improves|Outcome for the property|Value for operations|How it fits the project|Installation approach|Best suited to|Built for a specific building outcome|Confirmed product facts|The operational challenge|A coordinated solution, explained clearly|Better outcomes for owners|Scope and outcomes at a glance|Continue exploring|View case study/;

  for (const path of localizedDetails) {
    const response = await fetchPath(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const visibleHtml = html.replace(/<script[\s\S]*?<\/script>/gi, "");
    assert.doesNotMatch(visibleHtml, forbiddenInterfaceCopy, path);
    if (path.startsWith("/ar/")) assert.match(visibleHtml, /[\u0600-\u06ff]/, path);
    else assert.match(visibleHtml, /[\u3400-\u9fff]/, path);
  }
});
