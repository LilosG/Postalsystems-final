import type { APIRoute } from "astro";
import { SERVICES, ALL_CITIES, SITE } from "../data/site";
const base = SITE.url.replace(/\/+$/,"");
export const GET: APIRoute = () => {
  const now = new Date().toISOString();
  const urls: string[] = [];
  urls.push(`${base}/`);
  urls.push(`${base}/services/`);
  urls.push(`${base}/service-areas/`);
  SERVICES.forEach(s => {
    urls.push(`${base}/services/${s.slug}/`);
    urls.push(`${base}/service-area/san-diego/${s.slug}/`);
  });
  ALL_CITIES.forEach(c => {
    urls.push(`${base}/service-area/${c.slug}/`);
    SERVICES.forEach(s => urls.push(`${base}/service-area/${c.slug}/${s.slug}/`));
    SERVICES.forEach(s => urls.push(`${base}/service-areas/${c.slug}/${s.slug}/`));
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
  urls.map(u => `<url><loc>${u}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`).join("") +
  `</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" }});
}
