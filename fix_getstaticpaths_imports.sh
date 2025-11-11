#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

cat > src/pages/service-areas/[city]/[service].astro <<'ASTRO'
---
import SiteLayout from "../../../layouts/SiteLayout.astro"
import CTA from "../../../components/ui/CTA.astro"
import Breadcrumbs from "../../../components/Breadcrumbs.astro"
import { slugify } from "../../../lib/slug"

export async function getStaticPaths() {
  const areas = (await import("../../../data/areas.json")).default
  const services = (await import("../../../data/services.json")).default
  const paths = []
  for (const c of areas) {
    const citySlug = slugify(c.city)
    for (const s of services) {
      const serviceSlug = slugify(s.name)
      paths.push({ params: { city: citySlug, service: serviceSlug }, props: { c, s } })
    }
  }
  return paths
}

const { c, s } = Astro.props as { c:any, s:any }
const serviceCity = `${s.name} in ${c.city}, ${c.state}`
const title = `${serviceCity} — Postal Systems`
const desc = `${s.name} by USPS-approved installers serving ${c.city}, ${c.state}.`
const canonical = `https://postalsystemspro.com/service-areas/${slugify(c.city)}/${slugify(s.name)}/`
---
<html lang="en">
  <head>
    <SiteLayout title={title} description={desc} canonical={canonical} />
  </head>
  <body>
    <main class="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[
        {href:'/',label:'Home'},
        {href:'/service-areas/',label:'Service Areas'},
        {href:`/service-areas/${slugify(c.city)}/`,label:c.city},
        {href:canonical,label:s.name}
      ]}/>
      <h1 class="text-3xl font-bold tracking-tight">{serviceCity}</h1>
      <p class="mt-2 text-gray-600">{desc}</p>
      {s.content && <div class="prose max-w-none mt-6" set:html={s.content}></div>}
      <section class="mt-8">
        <h2 class="text-xl font-semibold">Nearby Cities</h2>
        <ul class="mt-3 flex flex-wrap gap-3">
          {(await import("../../../data/areas.json")).default.filter(a=>a.city!==c.city).slice(0,10).map((n:any)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(n.city)}/${slugify(s.name)}/`}>{n.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10"><CTA /></div>
    </main>
  </body>
</html>
ASTRO

npx astro build
./structure_audit.sh
