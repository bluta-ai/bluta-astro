# Blutech Website

Corporate, product and knowledge website for **Blutech IoT Limited**.

## Positioning

**Building IoT & AIoT for real-world operations.**

The site separates the Blutech building portfolio from the dedicated fire brand while making the relationship clear:

- **Blutech** — building IoT / AIoT hardware, solutions, integration and deployment
- **Blutech Halo** — Building Intelligence & Management Platform
- **Blutech Core** — IoT Device & Integration Platform
- **BLUTA Fire** — Blutech's dedicated fire & life-safety brand (`bluta.io`)

The tracked status of all 36 website-readiness categories is in `docs/website-readiness.md`. Categories that depend on a live deployment, external accounts or human visual/permission review are deliberately not marked complete prematurely. The build-level target is **32 PASS / 2 REVIEW / 2 EXTERNAL / 0 FAIL**.

## Local development

Requires Node.js 24.x.

```bash
npm install
npm run dev
```

Production build and website-readiness audit:

```bash
npm run check
```

`npm run check` builds the full static site and runs `scripts/site-audit.mjs`, which checks the 36 website-readiness categories tracked for this rebuild. GitHub CI separately runs `npm audit --omit=dev --audit-level=high` before the site audit.

## Deployment environment variables

The contact form uses a serverless function at `/api/contact` and Resend.

Required for production contact-form delivery:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` — use a sender on a domain verified in Resend
- `CONTACT_TO_EMAIL` — optional; defaults to `enquiry@blutech.io`

Optional analytics / webmaster verification:

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_BING_SITE_VERIFICATION`

If Google Analytics is configured, it is **not loaded until the visitor explicitly allows analytics**. The implementation disables advertising-personalisation signals and tracks only website-oriented events such as successful enquiry generation, outbound links and file downloads.

Do not commit credentials, API keys or verification secrets to the repository.

## Content architecture

- `src/data/site.ts` — public product catalogue, solution catalogue and selected project references
- `src/data/resources.ts` — knowledge / SEO resource articles
- `src/pages/products/[slug].astro` — generated product detail pages
- `src/pages/solutions/[slug].astro` — generated solution/search-intent pages
- `src/pages/resources/[slug].astro` — generated knowledge articles
- `src/pages/[lang]/[...path].astro` — Traditional Chinese, Simplified Chinese and Arabic core routes

The catalogue intentionally excludes products that are discontinued, project-only, never commercialised, or assigned to BLUTA Fire.

## Evidence rules

Do not add a specification, certification, award, deployment quantity, performance figure or customer outcome unless its scope is supported by an approved source.

In particular:

- do not imply every product in an award-winning solution individually won the award;
- do not copy an old SKU's technical specification into a replacement/current SKU without confirmation;
- keep fire-product certifications and approval statements with the exact BLUTA Fire product documentation;
- prefer a missing product image to an inaccurate generated product image.

## Languages

Core routes are provided in:

- English
- Traditional Chinese (`/zh-hk/`)
- Simplified Chinese (`/zh-cn/`)
- Arabic (`/ar/`, RTL)

Product/solution/resource detail localisation should be expanded from the shared structured content as approved translations become available.

## Search / AI discovery

The site includes:

- canonical metadata
- hreflang for translated core routes
- XML sitemap
- robots.txt
- Organization, Product, SoftwareApplication, Service, FAQ and Article structured data where relevant
- Open Graph / social metadata
- `llms.txt`
- search-intent solution pages and practical resource articles

## Release process

1. `npm run check`
2. CI must be green, including dependency security audit.
3. Review a deployed preview on desktop/mobile and major browsers.
4. Verify contact-form delivery with the production Resend sender.
5. Verify analytics/Search Console/Bing configuration.
6. Confirm all public imagery and project/customer references are cleared for publication.
7. Merge only after final content and visual approval.
