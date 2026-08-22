# Blutech Website

Corporate, product and knowledge website for **Blutech IoT Limited**.

## Positioning

**Building IoT & AIoT for real-world operations.**

Brand architecture:

- **Blutech** — building IoT / AIoT hardware, solutions, integration and deployment
- **Blutech Halo** — Building Intelligence & Management Platform
- **Blutech Core** — IoT Device & Integration Platform
- **BLUTA Fire** — Blutech's dedicated fire & life-safety brand (`bluta.io`)

The 36-category readiness register is in `docs/website-readiness.md`. The site must not be described as finished while any release-blocking photography, customer-journey QA, production credential or post-deployment check is still open.

## Local development

Requires Node.js 24.x.

```bash
npm install
npm run dev
```

Development build + structural audits:

```bash
npm run check
```

Strict production release gate:

```bash
npm run release:check
```

`npm run check` builds the site, runs the 36-category structural audit and reports product-image issues. `npm run release:check` repeats the checks with product photography in strict mode, so a public SKU without an assigned image, a reused product image, or a generic/placeholder image reference blocks release. Human review must still confirm that each image is genuinely the correct current product.

GitHub CI also runs `npm audit --omit=dev --audit-level=high`.

## Visual direction

**Architectural Tech / Premium Minimal**

- predominantly white / warm-neutral backgrounds;
- charcoal typography and restrained Blutech blue;
- large real project photography;
- Swiss/industrial catalogue treatment for hardware;
- minimal card chrome, gradients and glow;
- one deliberate dark software moment for Halo / Core;
- subtle motion only.

## Deployment environment variables

The contact form uses `/api/contact` and Resend.

Required for production contact-form delivery:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — sender on a domain verified in Resend
- `CONTACT_TO_EMAIL` — optional; defaults to `enquiry@blutech.io`

Optional analytics / webmaster verification:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_BING_SITE_VERIFICATION`

Do not commit credentials, API keys or verification secrets.

## Content architecture

- `src/data/site.ts` — public product catalogue, solutions and selected projects
- `src/data/resources.ts` — knowledge / SEO resources
- `src/pages/products/[slug].astro` — generated product pages
- `src/pages/solutions/[slug].astro` — generated solution/search-intent pages
- `src/pages/resources/[slug].astro` — generated knowledge pages
- `src/pages/[lang]/[...path].astro` — Traditional Chinese, Simplified Chinese and Arabic core routes
- `scripts/product-image-audit.mjs` — product photography completeness / duplicate-image gate

The public catalogue intentionally excludes discontinued, project-only, never-commercialised and BLUTA Fire products.

## Evidence rules

Do not add a specification, certification, award, deployment quantity, performance figure or customer outcome unless its scope is supported by an approved source.

For imagery:

- use the real current product photo first;
- do not use another SKU's enclosure merely because it looks similar;
- do not treat text generated inside an AI image as product specification evidence;
- do not publish a generic enclosure as if it were a verified SKU;
- installation photography is useful but does not replace a clear product image.

## Languages

Core routes:

- English
- Traditional Chinese (`/zh-hk/`)
- Simplified Chinese (`/zh-cn/`)
- Arabic (`/ar/`, RTL)

## Release process

1. Complete correct product photography for **every published SKU**.
2. Run `npm run release:check` and keep CI/security green.
3. Open every main page and every product page on the deployed preview as a customer.
4. QA Chrome, Safari, Edge, iPhone, Android, desktop and tablet.
5. Verify all primary navigation, enquiry CTAs, language routes, downloads and external links.
6. Verify real contact-form delivery using production Resend credentials.
7. Verify analytics / Search Console / Bing if enabled.
8. Confirm publication rights for project/customer imagery and named references.
9. Measure production Core Web Vitals after deployment.
10. Merge only after final customer-level content and visual approval.
