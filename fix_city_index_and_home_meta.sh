#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

cat > src/pages/service-areas/[city]/index.astro <<'ASTRO'
---
import SiteLayout from "../../../layouts/SiteLayout.astro"
import CTA from "../../../components/ui/CTA.astro"
import Breadcrumbs from "../../../components/Breadcrumbs.astro"
import { slugify } from "../../../lib/slug"

export async function getStaticPaths() {
  const areas = (await import("../../../data/areas.json")).default
  return areas.map((c)=>({ params: { city: slugify(c.city) }, props:{ c } }))
}

const { c } = Astro.props as { c:any }
const title = `Commercial Mailbox Services in ${c.city}, ${c.state} — Postal Systems`
const desc = `USPS-approved mailbox installation, parcel lockers, and repairs in ${c.city}, ${c.state}.`
const canonical = `https://postalsystemspro.com/service-areas/${slugify(c.city)}/`
const services = (await import("../../../data/services.json")).default
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

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
if(!fs.existsSync(p)) process.exit(0)
let s=fs.readFileSync(p,'utf8')
const hasFront=/^---\s*[\s\S]*?---/.test(s)
if(!/name="description"/.test(s) && !/description:/.test(s)){
  if(hasFront){
    s=s.replace(/^---\s*/,`---\ndescription: USPS-approved commercial mailbox installation, parcel lockers, and repairs for San Diego County.\n`)
  }else{
    s=`---\ndescription: USPS-approved commercial mailbox installation, parcel lockers, and repairs for San Diego County.\n---\n`+s
  }
}
fs.writeFileSync(p,s)
JS

npx astro build
./structure_audit.sh
