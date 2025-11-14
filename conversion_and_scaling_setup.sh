#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/components/conversion src/pages/api src/data

cat > src/components/conversion/CTAButton.astro <<'ASTRO'
---
const { href = "#", label = "Get a Quote", variant = "primary", className = "" } = Astro.props
const v = variant === "secondary" ? "bg-white text-black hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
---
<a href={href} class={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition ${v} ${className}`}>
  {label}
</a>
ASTRO

cat > src/components/conversion/TrustBar.astro <<'ASTRO'
---
const items = [
  {k:"usps", t:"USPS Approved Installer"},
  {k:"licensed", t:"Licensed • Bonded • Insured"},
  {k:"years", t:"25+ Years Experience"},
  {k:"reviews", t:"5-Star Google Reviews"}
]
---
<div class="w-full bg-gray-50 border-t border-gray-200">
  <div class="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {items.map(i => (
      <div class="flex items-center gap-3">
        <div class="h-8 w-8 rounded-full bg-blue-600/10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" class="h-5 w-5"><path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2"/></svg>
        </div>
        <span class="text-sm font-medium">{i.t}</span>
      </div>
    ))}
  </div>
</div>
ASTRO

cat > src/components/conversion/StickyCTA.astro <<'ASTRO'
---
const { phone="+1 (619) 555-1234", quoteHref="/contact/#quote" } = Astro.props
---
<div class="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur border-t border-gray-200">
  <div class="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
    <div class="text-sm sm:text-base font-medium">Need commercial mailbox installation or service in San Diego?</div>
    <div class="flex items-center gap-3">
      <a href={`tel:${phone.replace(/[^0-9+]/g,"")}`} class="hidden sm:inline-flex rounded-xl px-4 py-2 border border-gray-300 hover:bg-gray-50">Call {phone}</a>
      <a href={quoteHref} class="inline-flex rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold">Get a Free Quote</a>
    </div>
  </div>
</div>
ASTRO

cat > src/components/conversion/QuoteForm.astro <<'ASTRO'
---
const { headline="Request a Free Quote", sub="Tell us about your project and location.", submitLabel="Request Quote" } = Astro.props
const page = Astro.url?.href || ""
---
<section id="quote" class="bg-gray-50 rounded-2xl p-6 sm:p-8">
  <h2 class="text-2xl font-bold tracking-tight">{headline}</h2>
  <p class="text-gray-600 mt-1">{sub}</p>
  <form id="quoteForm" class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" method="post" action="/api/lead">
    <input type="hidden" name="page" value={page} />
    <div><label class="block text-sm font-medium">Full Name</label><input name="name" required class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div><label class="block text-sm font-medium">Company</label><input name="company" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div><label class="block text-sm font-medium">Email</label><input type="email" name="email" required class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div><label class="block text-sm font-medium">Phone</label><input name="phone" required class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div><label class="block text-sm font-medium">City</label><input name="city" required class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div><label class="block text-sm font-medium">Service Needed</label><input name="service" required class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" /></div>
    <div class="sm:col-span-2"><label class="block text-sm font-medium">Project Details</label><textarea name="message" rows="4" class="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"></textarea></div>
    <div class="sm:col-span-2 flex items-center justify-between">
      <div class="text-xs text-gray-500">By submitting you agree to be contacted.</div>
      <button class="rounded-xl px-5 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700">{submitLabel}</button>
    </div>
    <div id="quoteSuccess" class="hidden rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-green-800">Thanks—your request has been received.</div>
    <div id="quoteError" class="hidden rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-red-800">Something went wrong. Please call us.</div>
  </form>
  <script>
    const f=document.getElementById('quoteForm'); if(f){f.addEventListener('submit',async(e)=>{e.preventDefault();const d=new FormData(f);try{const r=await fetch(f.action,{method:'POST',body:d});if(r.ok){document.getElementById('quoteSuccess').classList.remove('hidden');f.reset()}else{document.getElementById('quoteError').classList.remove('hidden')}}catch{document.getElementById('quoteError').classList.remove('hidden')}})}
  </script>
</section>
ASTRO

cat > src/pages/api/lead.ts <<'TS'
import type { APIRoute } from 'astro'
export const prerender = false
export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()
  const payload = Object.fromEntries(data.entries())
  console.log('Lead', payload)
  return new Response(JSON.stringify({ ok:true }), { status: 200, headers: { 'content-type': 'application/json' } })
}
TS

node - <<'JS'
const fs=require('fs');const p='src/layouts/SiteLayout.astro'
if(fs.existsSync(p)){
  let s=fs.readFileSync(p,'utf8')
  if(!/from "\.\/\.\.\/components\/conversion\/StickyCTA\.astro"/.test(s)){
    s = `---\n`+s.replace(/^---\n/,'').replace(/import\s+.*\n/gm,(m)=>m)+`import StickyCTA from "../components/conversion/StickyCTA.astro"\nimport TrustBar from "../components/conversion/TrustBar.astro"\n---\n`+''+s.split('---\n').slice(1).join('---\n')
  }
  if(!/<StickyCTA\b/.test(s)){
    s = s.replace(/<\/body>\s*<\/html>\s*$/i, `<TrustBar />\n<StickyCTA />\n</body>\n</html>`)
  }
  fs.writeFileSync(p,s)
}
JS

node - <<'JS'
const fs=require('fs');function ensure(path,content){if(!fs.existsSync(path)){fs.mkdirSync(require('path').dirname(path),{recursive:true});fs.writeFileSync(path,content)}}
ensure('src/data/services.json', JSON.stringify([
], null, 2))
ensure('src/data/service-areas.json', JSON.stringify([
], null, 2))
JS

mkdir -p src/pages/services src/pages/service-areas src/pages/services/[service]
cat > src/pages/services/[service]/index.astro <<'ASTRO'
---
export async function getStaticPaths() {
  const services = (await import('../../../data/services.json')).default
  return services.map((s) => ({ params: { service: s.slug }, props: { service: s } }))
}
const { service } = Astro.props
import SiteLayout from '../../../layouts/SiteLayout.astro'
import CTAButton from '../../../components/conversion/CTAButton.astro'
import QuoteForm from '../../../components/conversion/QuoteForm.astro'
const title = `${service.name} — Postal Systems`
const desc = service.description || `Professional ${service.name} for commercial properties in San Diego County.`
const canonical = `${Astro.site?.origin || 'https://postalsystemspro.com'}/services/${service.slug}/`
---
<SiteLayout title={title} canonical={canonical} description={desc}>
  <main class="mx-auto max-w-7xl px-4 py-12">
    <h1 class="text-3xl font-bold tracking-tight">{service.name}</h1>
    <p class="mt-3 text-gray-600">{desc}</p>
    <div class="mt-6 flex gap-3">
      <CTAButton href="#quote" label="Get a Free Quote" />
      <CTAButton href="/contact/" label="Contact" variant="secondary" />
    </div>
    <div class="prose prose-gray mt-10">
      <Fragment set:html={service.bodyHtml || ''} />
    </div>
    <div class="mt-12">
      <QuoteForm />
    </div>
  </main>
</SiteLayout>
ASTRO

mkdir -p src/pages/service-areas/[city]
cat > src/pages/service-areas/[city]/index.astro <<'ASTRO'
---
export async function getStaticPaths() {
  const cities = (await import('../../../data/service-areas.json')).default
  return cities.map((c) => ({ params: { city: c.slug }, props: { city: c } }))
}
const { city } = Astro.props
import SiteLayout from '../../../layouts/SiteLayout.astro'
import CTAButton from '../../../components/conversion/CTAButton.astro'
import QuoteForm from '../../../components/conversion/QuoteForm.astro'
const title = `${city.name} Commercial Mailbox Services — Postal Systems`
const desc = `USPS-approved commercial mailbox installation and service in ${city.name}, ${city.state}.`
const canonical = `${Astro.site?.origin || 'https://postalsystemspro.com'}/service-areas/${city.slug}/`
---
<SiteLayout title={title} canonical={canonical} description={desc}>
  <main class="mx-auto max-w-7xl px-4 py-12">
    <h1 class="text-3xl font-bold tracking-tight">{city.name} Commercial Mailbox Services</h1>
    <p class="mt-3 text-gray-600">{desc}</p>
    <div class="mt-6"><CTAButton href="#quote" label="Get a Free Quote" /></div>
    <div class="mt-12"><QuoteForm /></div>
  </main>
</SiteLayout>
ASTRO

mkdir -p src/pages/services/[service]/[city]
cat > src/pages/services/[service]/[city]/index.astro <<'ASTRO'
---
export async function getStaticPaths() {
  const services = (await import('../../../../data/services.json')).default
  const cities = (await import('../../../../data/service-areas.json')).default
  const paths = []
  for (const s of services) for (const c of cities) paths.push({ params: { service: s.slug, city: c.slug }, props: { service: s, city: c } })
  return paths
}
const { service, city } = Astro.props
import SiteLayout from '../../../../layouts/SiteLayout.astro'
import CTAButton from '../../../../components/conversion/CTAButton.astro'
import QuoteForm from '../../../../components/conversion/QuoteForm.astro'
const title = `${service.name} in ${city.name} — Postal Systems`
const desc = `USPS-approved ${service.name.toLowerCase()} in ${city.name}, ${city.state}.`
const canonical = `${Astro.site?.origin || 'https://postalsystemspro.com'}/services/${service.slug}/${city.slug}/`
---
<SiteLayout title={title} canonical={canonical} description={desc}>
  <main class="mx-auto max-w-7xl px-4 py-12">
    <h1 class="text-3xl font-bold tracking-tight">{service.name} in {city.name}</h1>
    <p class="mt-3 text-gray-600">{desc}</p>
    <div class="mt-6 flex gap-3">
      <CTAButton href="#quote" label="Get a Free Quote" />
      <CTAButton href={`/service-areas/${city.slug}/`} label={`More in ${city.name}`} variant="secondary" />
    </div>
    <div class="prose prose-gray mt-10">
      <Fragment set:html={service.bodyHtml || ''} />
    </div>
    <div class="mt-12"><QuoteForm /></div>
  </main>
</SiteLayout>
ASTRO

cat > scripts/generate-pages.mjs <<'JS'
import fs from 'fs'
import path from 'path'
const services = JSON.parse(fs.readFileSync('src/data/services.json','utf8'))
const cities = JSON.parse(fs.readFileSync('src/data/service-areas.json','utf8'))
function slugify(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}
if(!services.length||!cities.length){console.log('Add items to src/data/services.json and src/data/service-areas.json before generating.');process.exit(0)}
for(const s of services){ if(!s.slug) s.slug=slugify(s.name) }
for(const c of cities){ if(!c.slug) c.slug=slugify(c.name) }
fs.writeFileSync('src/data/services.json', JSON.stringify(services,null,2))
fs.writeFileSync('src/data/service-areas.json', JSON.stringify(cities,null,2))
console.log(`Prepared ${services.length} services and ${cities.length} areas. Pages will be created from dynamic routes at build.`)
JS

if [ -f package.json ]; then
  node -e "let p=require('./package.json');p.scripts=p.scripts||{};p.scripts['gen:pages']='node scripts/generate-pages.mjs';require('fs').writeFileSync('package.json',JSON.stringify(p,null,2))"
fi

npx astro build >/dev/null || true
