#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/data src/lib src/components ui-tmp >/dev/null 2>&1 || true

cat > src/data/services.json <<'JSON'
[]
JSON

cat > src/data/areas.json <<'JSON'
[]
JSON

cat > src/lib/slug.ts <<'TS'
export const slugify = (s: string) =>
  s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
TS

cat > src/components/Breadcrumbs.astro <<'ASTRO'
---
const { crumbs = [] } = Astro.props as { crumbs: { href: string, label: string }[] }
---
<nav aria-label="Breadcrumb" class="text-sm mb-6">
  <ol class="flex flex-wrap gap-2 text-gray-600">
    {crumbs.map((c,i) => (
      <li>
        {i>0 && <span>/</span>}
        <a href={c.href} class="hover:text-primary-600">{c.label}</a>
      </li>
    ))}
  </ol>
</nav>
ASTRO

cat > src/components/LocalSchema.astro <<'ASTRO'
---
const { name, url, phone, sameAs = [], areaServed = [] } = Astro.props as { name: string, url: string, phone?: string, sameAs?: string[], areaServed?: string[] }
const data = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": name,
  "url": url,
  "telephone": phone,
  "areaServed": areaServed.map(c => ({ "@type":"City", "name": c })),
  "sameAs": sameAs
}
---
<script type="application/ld+json">{JSON.stringify(data)}</script>
ASTRO

cat > src/pages/services/index.astro <<'ASTRO'
---
import SiteLayout from "../../layouts/SiteLayout.astro"
import CTA from "../../components/ui/CTA.astro"
import { slugify } from "../../lib/slug"
const services = (await import("../../data/services.json")).default
const pageTitle = "Mailbox Services"
const pageDesc = "USPS-approved commercial mailbox installation, repairs, parcel lockers, 4C/CBU systems."
---
<html lang="en">
  <head>
    <SiteLayout title={`${pageTitle} — Postal Systems`} description={pageDesc} canonical={`https://postalsystemspro.com/services`} />
  </head>
  <body>
    <main class="max-w-6xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold tracking-tight">Mailbox Services</h1>
      <p class="mt-2 text-gray-600">{pageDesc}</p>
      <ul class="mt-8 grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <li class="rounded-2xl border p-5 shadow-ps">
            <a href={`/services/${slugify(s.name)}/`} class="text-lg font-semibold hover:text-primary-600">{s.name}</a>
            <p class="text-gray-600 mt-1">{s.summary}</p>
          </li>
        ))}
      </ul>
      <div class="mt-10">
        <CTA />
      </div>
    </main>
  </body>
</html>
ASTRO

cat > src/pages/services/[service]/index.astro <<'ASTRO'
---
import SiteLayout from "../../../layouts/SiteLayout.astro"
import CTA from "../../../components/ui/CTA.astro"
import Breadcrumbs from "../../../components/Breadcrumbs.astro"
import { slugify } from "../../../lib/slug"
const services = (await import("../../../data/services.json")).default
export async function getStaticPaths() {
  return services.map((s:any)=>({ params: { service: slugify(s.name) }, props: { s } }))
}
const { s } = Astro.props as { s: any }
const title = `${s.name} — Postal Systems`
const desc = s.summary || "USPS-approved commercial mailbox work in San Diego County."
const canonical = `https://postalsystemspro.com/services/${slugify(s.name)}/`
---
<html lang="en">
  <head>
    <SiteLayout title={title} description={desc} canonical={canonical} />
  </head>
  <body>
    <main class="max-w-6xl mx-auto px-4 py-10">
      <Breadcrumbs crumbs={[{href:'/',label:'Home'},{href:'/services/',label:'Services'},{href:canonical,label:s.name}]} />
      <h1 class="text-3xl font-bold tracking-tight">{s.name}</h1>
      <p class="mt-2 text-gray-600">{desc}</p>
      {s.content && <div class="prose max-w-none mt-6" set:html={s.content}></div>}
      <section class="mt-8">
        <h2 class="text-xl font-semibold">Popular Cities We Serve</h2>
        <ul class="mt-3 flex flex-wrap gap-3">
          {(await import("../../../data/areas.json")).default.slice(0,12).map((c:any)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(c.city)}/${slugify(s.name)}/`}>{c.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10">
        <CTA />
      </div>
    </main>
  </body>
</html>
ASTRO

cat > src/pages/service-areas/index.astro <<'ASTRO'
---
import SiteLayout from "../../layouts/SiteLayout.astro"
import CTA from "../../components/ui/CTA.astro"
import { slugify } from "../../lib/slug"
const areas = (await import("../../data/areas.json")).default
const pageTitle = "Service Areas"
const pageDesc = "Commercial mailbox installation and service across San Diego County."
---
<html lang="en">
  <head>
    <SiteLayout title={`${pageTitle} — Postal Systems`} description={pageDesc} canonical={`https://postalsystemspro.com/service-areas`} />
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
      <div class="mt-10">
        <CTA />
      </div>
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
  return areas.map((c:any)=>({ params: { city: slugify(c.city) }, props:{ c } }))
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
      <Breadcrumbs crumbs={[{href:'/',label:'Home'},{href:'/service-areas/',label:'Service Areas'},{href:canonical,label:`${c.city}`}]}/>
      <h1 class="text-3xl font-bold tracking-tight">Mailbox Services in {c.city}</h1>
      <p class="mt-2 text-gray-600">{desc}</p>
      <section class="mt-6">
        <h2 class="text-xl font-semibold">Available Services</h2>
        <ul class="mt-3 grid md:grid-cols-2 gap-4">
          {services.map((s:any)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(c.city)}/${slugify(s.name)}/`}>{s.name} in {c.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10">
        <CTA />
      </div>
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
  for (const c of areas) for (const s of services) paths.push({ params: { city: slugify(c.city), service: slugify(s.name) }, props: { c, s } })
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
      <Breadcrumbs crumbs={[{href:'/',label:'Home'},{href:'/service-areas/',label:'Service Areas'},{href:`/service-areas/${slugify(c.city)}/`,label:c.city},{href:canonical,label:s.name}]}/>
      <h1 class="text-3xl font-bold tracking-tight">{serviceCity}</h1>
      <p class="mt-2 text-gray-600">{desc}</p>
      {s.content && <div class="prose max-w-none mt-6" set:html={s.content}></div>}
      <section class="mt-8">
        <h2 class="text-xl font-semibold">Nearby Cities</h2>
        <ul class="mt-3 flex flex-wrap gap-3">
          {areas.filter(a=>a.city!==c.city).slice(0,10).map((n:any)=>(
            <li><a class="underline hover:text-primary-600" href={`/service-areas/${slugify(n.city)}/${slugify(s.name)}/`}>{n.city}</a></li>
          ))}
        </ul>
      </section>
      <div class="mt-10">
        <CTA />
      </div>
    </main>
  </body>
</html>
ASTRO

npx astro build
