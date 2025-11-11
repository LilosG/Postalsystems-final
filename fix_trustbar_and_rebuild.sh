#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/components/ui

cat > src/components/ui/TrustBar.astro <<'ASTRO'
---
interface Item { label: string }
interface Props { items?: Item[] }
const { items = [
  { label: "USPS-Approved Installer" },
  { label: "Licensed & Insured" },
  { label: "30+ Years Experience" },
  { label: "Serving San Diego County" }
] } = Astro.props as Props
---
<section class="border-y border-gray-200 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 py-4">
    <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
      {items.map((i) => (
        <li class="flex items-center gap-2">
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-primary-600"></span>
          <span>{i.label}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
ASTRO

node - <<'JS'
const fs=require('fs')
const glob=require('glob')
const files=glob.sync('src/pages/**/*.{astro,md,mdx}')
for(const p of files){
  let s=fs.readFileSync(p,'utf8')
  if(!/<TrustBar\b/.test(s)) continue
  const hasFront=/^---\s*[\s\S]*?---\s*/.test(s)
  const hasImport=/import\s+TrustBar\s+from\s+["']\.\.\/components\/ui\/TrustBar\.astro["']|import\s+TrustBar\s+from\s+["']\.\.\/\.\.\/components\/ui\/TrustBar\.astro["']|import\s+TrustBar\s+from\s+["'].*components\/ui\/TrustBar\.astro["']/.test(s)
  if(!hasImport){
    if(hasFront){
      const depth=p.split('/').length
      const up = depth<=3 ? '..' : Array(depth-2).fill('..').join('/')
      s=s.replace(/^---\s*/,(m)=>`${m}import TrustBar from "${up}/components/ui/TrustBar.astro"\n`)
    }else{
      const depth=p.split('/').length
      const up = depth<=3 ? '..' : Array(depth-2).fill('..').join('/')
      s=`---\nimport TrustBar from "${up}/components/ui/TrustBar.astro"\n---\n`+s
    }
    fs.writeFileSync(p,s)
  }
}
JS

npx astro build
./structure_audit.sh
