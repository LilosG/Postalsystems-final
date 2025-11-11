#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/pages/service-areas src/pages/service-areas/[city]

cat > src/pages/service-areas/index.astro <<'ASTRO'
---
import SiteLayout from "../../layouts/SiteLayout.astro"
import CTA from "../../components/ui/CTA.astro"
import { slugify } from "../../lib/slug"
const areas = (await import("../../data/areas.json")).default
const pageTitle = "Service Areas"
const pageDesc = "Commercial mailbox installation and service across San Diego County."
const canonical = "https://postalsystemspro.com/service-areas"
---
<html lang="en">
  <head>
    <SiteLayout title={`${pageTitle} — Postal Systems`} description={pageDesc} canonical={canonical} />
  </head>
  <body>
    <main class="max-w-6xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold tracking-tight">Service Areas</h1>
      <p class="mt-2 text-gray-600">{pageDesc}</p>
      <ul class="mt-8 grid md:grid-cols-3 gap-6">
        {areas.map(c => (
          <li class="rounded-2xl border p-5 shadow-ps">
            <a href={`/service-areas/${slugify(c.city)}/`} class="text-lg font-semibold hover:text-primary-600">{c.city}, {c.state}</a>
            {c.county && <p class="text-gray-600 mt-1">{c.county} County</p>}
          </li>
        ))}
      </ul>
      <div class="mt-10"><CTA /></div>
    </main>
  </body>
</html>
ASTRO

cat > src/pages/service-areas/[city]/index.astro <<'ASTRO'
---
import SiteLayout from "../../../layouts/SiteLayout.astro"
import CTA from "../../../components/ui/CTA.astro"
import Breadcrumbs from "../../../components/Breadcrumbs.astro"
import { slugify } from "../../../lib/slug"
const areas = (await import("../../../data/areas.json")).default
const services = (await import("../../../data/services.json")).default
export async function getStaticPaths() {
  return areas.map((c)=>({ params: { city: slugify(c.city) }, props:{ c } }))
}
const { c } = Astro.props as { c:any }
const title = `Commercial Mailbox Services in ${c.city}, ${c.state} — Postal Systems`
const desc = `USPS-approved mailbox installation, parcel lockers, and repairs in ${c.city}, ${c.state}.`
const canonical = `https://postalsystemspro.com/service-areas/${slugify(c.city)}/`
---
<html lang="en">
  <head>
    <SiteLayout title={title} description={desc} canonical={canonical} />
  </head>
  <body>
    <main class="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{href:'/',label:'Home'},{href:'/service-areas/',label:'Service Areas'},{href:canonical,label:c.city}]}/>
      <h1 class="text-3xl font-bold tracking-tight">Mailbox Services in {c.city}</h1>
      <p class="mt-2 text-gray-600">{desc}</p>
      <section class="mt-6">
        <h2 class="text-xl font-semibold">Available Services</h2>
        <ul class="mt-3 grid md:grid-cols-2 gap-4">
          {services.map((s)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(c.city)}/${slugify(s.name)}/`}>{s.name} in {c.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10"><CTA /></div>
    </main>
  </body>
</html>
ASTRO

cat > src/pages/service-areas/[city]/[service].astro <<'ASTRO'
---
import SiteLayout from "../../../layouts/SiteLayout.astro"
import CTA from "../../../components/ui/CTA.astro"
import Breadcrumbs from "../../../components/Breadcrumbs.astro"
import { slugify } from "../../../lib/slug"
const areas = (await import("../../../data/areas.json")).default
const services = (await import("../../../data/services.json")).default
export async function getStaticPaths() {
  const paths=[]
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
          {areas.filter(a=>a.city!==c.city).slice(0,10).map((n)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(n.city)}/${slugify(s.name)}/`}>{n.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10"><CTA /></div>
    </main>
  </body>
</html>
ASTRO

rg -l --glob 'src/pages/**/*' '/service-area/' | xargs -I{} sed -i '' 's|/service-area/|/service-areas/|g' {} || true

npx astro build
./structure_audit.sh
