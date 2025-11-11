#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/components/ui

cat > src/components/ui/Stat.astro <<'ASTRO'
---
interface Props {
  value: string
  label: string
  sublabel?: string
}
const { value, label, sublabel="" } = Astro.props as Props
---
<div class="flex flex-col items-start rounded-xl border border-gray-200 p-4 bg-white">
  <div class="text-3xl font-semibold tracking-tight">{value}</div>
  <div class="mt-1 text-sm text-gray-600">{label}</div>
  {sublabel && <div class="mt-1 text-xs text-gray-500">{sublabel}</div>}
</div>
ASTRO

node - <<'JS'
const fs=require('fs')
const glob=require('glob')
const files=glob.sync('src/pages/**/*.{astro,md,mdx}')
for(const p of files){
  let s=fs.readFileSync(p,'utf8')
  if(!/<Stat\b/.test(s)) continue
  const hasFront=/^---\s*[\s\S]*?---\s*/.test(s)
  const depth=p.split('/').length
  const up = depth<=3 ? '..' : Array(depth-2).fill('..').join('/')
  const importLine=`import Stat from "${up}/components/ui/Stat.astro"`
  const hasImport=new RegExp(`import\\s+Stat\\s+from\\s+["'].*components\\/ui\\/Stat\\.astro["']`).test(s)
  if(!hasImport){
    if(hasFront){
      s=s.replace(/^---\s*/,m=>`${m}${importLine}\n`)
    }else{
      s=`---\n${importLine}\n---\n`+s
    }
  }
  fs.writeFileSync(p,s)
}
JS

npx astro build
./structure_audit.sh
