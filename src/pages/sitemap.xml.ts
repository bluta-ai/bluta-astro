import { products, solutions } from '../data/site';
import { projects } from '../data/projects';
import { resources } from '../data/resources';

const site = 'https://blutech.io';
const core = ['','solutions','products','software','projects','technology','company','resources','contact','privacy','terms'];
const localized = ['zh-hk','zh-cn','ar'];

export async function GET() {
  const urls = new Set<string>();
  core.forEach((p)=>urls.add(`${site}/${p}`.replace(/\/$/, p ? '' : '/')));
  products.forEach((p)=>urls.add(`${site}/products/${p.slug}`));
  projects.forEach((p)=>urls.add(`${site}/projects/${p.slug}`));
  solutions.forEach((s)=>urls.add(`${site}/solutions/${s.slug}`));
  resources.forEach((r)=>urls.add(`${site}/resources/${r.slug}`));
  localized.forEach((lang)=>{
    ['','solutions','products','software','projects','technology','company','resources','contact'].forEach((p)=>urls.add(`${site}/${lang}/${p}`.replace(/\/$/, p ? '' : '/')));
    products.forEach((p)=>urls.add(`${site}/${lang}/products/${p.slug}`));
    projects.forEach((p)=>urls.add(`${site}/${lang}/projects/${p.slug}`));
    solutions.forEach((s)=>urls.add(`${site}/${lang}/solutions/${s.slug}`));
    resources.forEach((r)=>urls.add(`${site}/${lang}/resources/${r.slug}`));
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...urls].map((url)=>`  <url><loc>${url}</loc><changefreq>${url.includes('/resources/')?'monthly':'weekly'}</changefreq><priority>${url===site+'/'?'1.0':url.includes('/products/')||url.includes('/solutions/')?'0.8':'0.7'}</priority></url>`).join('\n')}\n</urlset>`;
  return new Response(body,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
