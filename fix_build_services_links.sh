#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/data
cat > src/data/services.json <<'JSON'
[
  {
    "name": "Commercial Mailbox Installation",
    "summary": "Turnkey commercial mailbox installs with USPS coordination and inspection sign-off.",
    "content": ""
  },
  {
    "name": "CBU Installation",
    "summary": "USPS-approved Cluster Box Unit (CBU) installs for HOAs, apartments, and commercial sites.",
    "content": ""
  },
  {
    "name": "4C Wall-Mounted Mailboxes",
    "summary": "Interior/exterior 4C wall-mounted or recessed systems with rough-opening coordination and ADA compliance.",
    "content": ""
  },
  {
    "name": "Parcel Lockers",
    "summary": "Add secure parcel lockers compatible with existing CBU/4C setups to reduce package pileups.",
    "content": ""
  },
  {
    "name": "Repairs & Lock Changes",
    "summary": "Door/lock replacements, vandalism remediation, and compartment fixes with fast turnaround.",
    "content": ""
  },
  {
    "name": "ADA-Compliant Installs",
    "summary": "Mailroom build-outs and height/clearance checks for ADA and USPS specifications.",
    "content": ""
  },
  {
    "name": "Mailbox Replacement & Retrofits",
    "summary": "Remove and replace aging units; pads, pedestals, labeling, and USPS handoff.",
    "content": ""
  },
  {
    "name": "Mailbox Relocation & Consolidation",
    "summary": "Move or consolidate units, pour/patch pads, update addressing, and coordinate USPS changeover.",
    "content": ""
  }
]
JSON

mkdir -p src/pages/services
cat > src/pages/services/[service].astro <<'ASTRO'
---
import SiteLayout from "../../layouts/SiteLayout.astro"
import CTA from "../../components/ui/CTA.astro"
import Breadcrumbs from "../../components/Breadcrumbs.astro"
import { slugify } from "../../lib/slug"
const services = (await import("../../data/services.json")).default
export async function getStaticPaths() {
  return services.map((s)=>({ params: { service: slugify(s.name) }, props: { s } }))
}
const { s } = Astro.props as { s: any }
const canonical = `https://postalsystemspro.com/services/${slugify(s.name)}/`
const title = `${s.name} — Postal Systems`
const desc = s.summary || "USPS-approved commercial mailbox work in San Diego County."
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
      <div class="mt-10"><CTA /></div>
    </main>
  </body>
</html>
ASTRO

rg -l --glob 'src/pages/**/*' '/service-area/' | xargs -I{} sed -i '' 's|/service-area/|/service-areas/|g' {}

npx astro build
./structure_audit.sh
