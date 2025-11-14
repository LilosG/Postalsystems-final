#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

TS=$(date +%s)
backup () { [ -f "$1" ] && mkdir -p ".restore_backups/$(dirname "$1")" && cp -a "$1" ".restore_backups/$1.$TS.current" || true; }
fetch () { git ls-tree -r --name-only "$1" | rg -n "^$2$" >/dev/null 2>&1 && git checkout "$1" -- "$2" && echo "$2"; }

FILES_BACKUP="src/pages/index.astro src/layouts/SiteLayout.astro src/components/sections/HeroSection.astro src/components/sections/StatsStrip.astro src/components/sections/Testimonials.astro src/components/sections/ServicesSection.astro src/components/sections/ServiceAreas.astro src/components/ui/TrustBar.astro src/components/ui/SectionHeader.astro src/components/ui/Button.astro src/components/ui/Card.astro src/components/TrustBadges.astro public/images/hero-mailbox.png public/images/hero-mailbox.jpg"
for f in $FILES_BACKUP; do backup "$f"; done

ADDED=()

a(){ local r="$1" p="$2"; local got=$(fetch "$r" "$p" || true); [ -n "$got" ] && ADDED+=("$got"); }

a 57cc7bd src/components/sections/HeroSection.astro
a 57cc7bd src/components/sections/StatsStrip.astro
a 57cc7bd src/components/sections/Testimonials.astro
a 57cc7bd src/components/sections/ServicesSection.astro
a 57cc7bd src/components/sections/ServiceAreas.astro
a 57cc7bd public/images/hero-mailbox.png
a 57cc7bd public/images/hero-mailbox.jpg

a 830607a src/components/ui/TrustBar.astro
a 830607a src/components/ui/SectionHeader.astro
a 830607a src/components/ui/Button.astro
a 830607a src/components/ui/Card.astro

if [ ! -f src/components/ui/TrustBar.astro ]; then
  a 57cc7bd src/components/TrustBadges.astro
fi

node - <<'JS'
const fs=require('fs')
const page='src/pages/index.astro'
if(!fs.existsSync(page)){process.exit(0)}
let s=fs.readFileSync(page,'utf8')

function ensureImport(path, alias){
  if(!new RegExp(`from "\\.\\./${path.replace(/\./g,'\\.').replace(/\//g,'\\/')}"`).test(s)){
    s=s.replace(/^---\n/,'---\n'+`import ${alias} from "../${path}"\n`)
  }
}

if(fs.existsSync('src/components/sections/HeroSection.astro')) ensureImport('components/sections/HeroSection.astro','HeroSection')
if(fs.existsSync('src/components/ui/TrustBar.astro')) ensureImport('components/ui/TrustBar.astro','TrustBar')
else if(fs.existsSync('src/components/TrustBadges.astro')) ensureImport('components/TrustBadges.astro','TrustBar')

if(!/<HeroSection\b/.test(s) && fs.existsSync('src/components/sections/HeroSection.astro')){
  s=s.replace(/<main[^>]*>/i,(m)=>m+'\n  <HeroSection heading="Mailbox Installation, Done Right." />')
}
if(!/<TrustBar\b/.test(s) && (fs.existsSync('src/components/ui/TrustBar.astro')||fs.existsSync('src/components/TrustBadges.astro'))){
  s=s.replace(/<HeroSection[^>]*>\n?<\/HeroSection>|<HeroSection[^>]*\/>/i,(m)=>m+'\n  <TrustBar />')
  if(!/TrustBar/.test(s)){
    s=s.replace(/<main[^>]*>/i,(m)=>m+'\n  <TrustBar />')
  }
}

fs.writeFileSync(page,s)
JS

if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
