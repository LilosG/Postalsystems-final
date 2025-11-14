#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

TS=$(date +%s)
mkdir -p .restore_backups/src/pages .restore_backups/src/components/ui .restore_backups/src/components/sections .restore_backups/public/images

for f in src/pages/index.astro src/components/ui/TrustBar.astro src/components/ui/SectionHeader.astro src/components/ui/Button.astro src/components/ui/Card.astro src/components/sections/HeroSection.astro src/components/sections/StatsStrip.astro src/components/sections/Testimonials.astro src/components/sections/ServicesSection.astro src/components/sections/ServiceAreas.astro; do
  [ -f "$f" ] && cp -a "$f" ".restore_backups/$f.$TS.current" || true
done
[ -f public/images/hero-mailbox.jpg ] && cp -a public/images/hero-mailbox.jpg ".restore_backups/public/images/hero-mailbox.jpg.$TS.current" || true
[ -f public/images/hero-mailbox.png ] && cp -a public/images/hero-mailbox.png ".restore_backups/public/images/hero-mailbox.png.$TS.current" || true

git checkout 57cc7bd -- \
  src/components/ui/TrustBar.astro \
  src/components/ui/SectionHeader.astro \
  src/components/ui/Button.astro \
  src/components/ui/Card.astro \
  src/components/sections/HeroSection.astro \
  src/components/sections/StatsStrip.astro \
  src/components/sections/Testimonials.astro \
  src/components/sections/ServicesSection.astro \
  src/components/sections/ServiceAreas.astro \
  public/images/hero-mailbox.png \
  public/images/hero-mailbox.jpg

node - <<'JS'
const fs=require('fs')
const p='src/pages/index.astro'
let s=fs.readFileSync(p,'utf8')
if(!/from "\.\.\/components\/sections\/HeroSection\.astro"/.test(s)){
  s=s.replace(/^---\n/,'---\nimport HeroSection from "../components/sections/HeroSection.astro"\n')
}
if(!/from "\.\.\/components\/ui\/TrustBar\.astro"/.test(s)){
  s=s.replace(/^---\n/,'---\nimport TrustBar from "../components/ui/TrustBar.astro"\n')
}
s=s.replace(/<main[^>]*>/i,(m)=>m+'\n  <HeroSection heading="Mailbox Installation, Done Right." />\n  <TrustBar />\n')
fs.writeFileSync(p,s)
JS

if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
