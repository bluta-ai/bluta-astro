# Blutech production deployment

The production delivery path is:

`GitHub -> Cloudflare Workers Builds -> blutech.io`

This application uses Vinext, React Server Components and server-rendered routes. Cloudflare recommends Workers, rather than a legacy Pages project, for this application type. Static assets are still served from Cloudflare's edge in the same deployment.

## Cloudflare project settings

In **Workers & Pages**, choose **Create application -> Import a repository** and select this repository.

Use these settings:

- Worker name: `bluta-astro`
- Production branch: `main`
- Root directory: `/`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --config dist/server/wrangler.json`
- Non-production deploy command: `npx wrangler versions upload --config dist/server/wrangler.json`
- Node.js version: `22`

Enable builds for non-production branches so pull requests receive version preview URLs. Do not attach `blutech.io` until the preview has passed visual, route, metadata and status-code checks.

## Domain cutover

1. Add `blutech.io` as a Worker custom domain.
2. Confirm Cloudflare issued an active TLS certificate.
3. Keep all existing MX, SPF, DKIM and DMARC records unchanged.
4. Add `www.blutech.io`, then create a permanent redirect from `www` to the apex domain while preserving paths and query strings.
5. Verify the homepage, four language roots, product pages, project pages, `robots.txt`, `sitemap.xml` and `llms.txt` before announcing launch.

## Search and measurement

After the domain is live:

1. Add a Domain property for `blutech.io` in Google Search Console and verify it with the DNS TXT record.
2. Submit `https://blutech.io/sitemap.xml`.
3. Add the site to Bing Webmaster Tools and submit the same sitemap.
4. Enable Cloudflare Web Analytics. Add GA4 only if its reporting is needed and the privacy/cookie policy is ready.
5. Check indexing, 404s and Core Web Vitals after 7, 14 and 30 days.

The application already generates canonical URLs, language alternates, metadata, Organization/Product/Article structured data, `robots.txt`, `sitemap.xml`, social previews and `llms.txt`.
