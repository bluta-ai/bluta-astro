# Blutech Website — 36-Category Readiness Register

This register prevents the rebuild from being called “finished” simply because it looks complete. `scripts/site-audit.mjs` checks what can be verified automatically; deployment/account/human-review items remain open until they are actually tested.

Status definitions:
- **PASS** — implemented and structurally verified in the build/CI.
- **REVIEW** — implemented in principle but needs visual, editorial or workflow review.
- **EXTERNAL** — requires production credentials, accounts, traffic or deployment state.

| # | Category | Current gate |
|---|---|---|
| 1 | Positioning | PASS — Building IoT & AIoT is the primary positioning. |
| 2 | Brand architecture | PASS — Blutech, Halo, Core and BLUTA Fire roles are explicit. |
| 3 | Site structure / navigation | PASS — core information architecture and shared navigation exist. |
| 4 | Homepage | PASS — proposition, proof, solutions, software, products, projects, BLUTA and CTA are present. |
| 5 | Solution pages | PASS — problem/search-intent landing pages exist. |
| 6 | Product catalogue | PASS — public catalogue is centrally controlled; excluded products are not published. |
| 7 | Product pages | PASS — generated detail pages use verified-only data and refuse invented specifications. |
| 8 | Blutech Halo | PASS — operator-facing capability is explained beyond “dashboard”. |
| 9 | Blutech Core | PASS — device/integration/backend role is explained. |
| 10 | Halo + Core story | PASS — field → connectivity → Core → Halo architecture is visible. |
| 11 | Projects / case studies | PASS — selected real deployments are presented conservatively. |
| 12 | Evidence library / claims policy | PASS for policy; ongoing editorial gate for every new claim. |
| 13 | Awards / credibility | PASS — wording remains at verified solution/company scope. |
| 14 | Customer proof | PASS — real named references are included where currently approved for site use. |
| 15 | Photography | PASS structurally; **human review required** for final image rights/permission and missing SKU photos. |
| 16 | Visual design | PASS structurally — common design system/components. |
| 17 | Mobile design | PASS structurally — responsive layouts/navigation; final device QA remains under #34. |
| 18 | Conversion / sales | PASS — contact and contextual product/solution CTAs exist. |
| 19 | Forms | PASS structurally — validation, consent, honeypot and failure fallback; production email test still required. |
| 20 | SEO foundations | PASS — canonical, sitemap, robots, clean routes and redirects. |
| 21 | Search-intent SEO | PASS — genuine solution pages target useful customer questions rather than geo-spam. |
| 22 | GEO / AI search | PASS structurally — factual summaries, FAQs, schemas, `llms.txt`, evidence-conscious wording. |
| 23 | Structured data | PASS — Organization/Product/Software/Service/FAQ/Article schema where relevant. |
| 24 | Multilingual | PASS for core-route architecture — EN, Traditional Chinese, Simplified Chinese and Arabic/RTL. Full detail-page translation remains editorial expansion. |
| 25 | Technical performance | PASS structurally — static generation, minimal JS, no external webfont dependency, lazy loading. Production Core Web Vitals must still be measured. |
| 26 | Accessibility | PASS structurally — semantic headings, labels, keyboard/focus considerations, skip link, reduced motion. Final screen-reader/browser audit under #34. |
| 27 | Security | PASS in CI — Astro 7.2.4 / Node 24 baseline, dependency audit blocks high-severity findings, and security headers/CSP/security contact are configured. |
| 28 | Privacy / legal | PASS — privacy and website terms exist. Optional analytics is consent-gated and configured without advertising personalisation signals. Legal review can still be performed before production launch. |
| 29 | Analytics / webmaster | EXTERNAL — consent-gated GA and conversion/outbound/download event hooks exist; Google Analytics ID, Search Console and Bing ownership/verification must be supplied in production. |
| 30 | Social / sharing | PASS — OG/Twitter metadata, default social artwork, favicon and manifest. |
| 31 | Technical architecture | PASS — reusable layout/components and central content data. |
| 32 | CMS / content maintenance | REVIEW — central TS data is maintainable by developers; decide whether a non-developer CMS is actually needed. |
| 33 | Error handling | PASS — 404 page and contact failure fallback. |
| 34 | Quality assurance | REVIEW — CI/build audit exists; must test deployed preview on Chrome, Safari, Edge, iPhone, Android and representative desktop/tablet widths. |
| 35 | Launch migration | PASS structurally — redirects and sitemap exist; final production crawl/404/index checks required after cutover. |
| 36 | Post-launch improvement | EXTERNAL — requires real traffic, conversions, Search Console queries and 404 data. |

## Production launch blockers

The redesign must not be described as fully production-passed until these real-world checks are complete:

1. The **release commit** (not just an earlier development commit) has a green build, dependency security audit and 36-category structural audit.
2. A deployed preview is checked on Chrome, Safari and Edge plus representative iPhone, Android, desktop and tablet widths.
3. `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` are configured; a real enquiry is submitted and receipt/reply flow is verified.
4. Google Analytics (if desired), Google Search Console and Bing Webmaster ownership/IDs are configured and verified.
5. Publication permission is confirmed for all project/customer images and named references.
6. Missing real product photography and exact downloadable specifications are added only where approved source files support them.
7. Production Core Web Vitals/Lighthouse are measured and material regressions are fixed.
8. After launch, indexing, 404s, conversion events and search queries are inspected before the post-launch categories are closed.

## BLUTA Fire relationship rule

Use this relationship consistently:

> **BLUTA Fire is Blutech's dedicated fire & life-safety brand.**

The Blutech website should make the origin clear, while BLUTA-specific pages/materials remain the authoritative place for exact fire-product certification, approval and regulatory claims.
