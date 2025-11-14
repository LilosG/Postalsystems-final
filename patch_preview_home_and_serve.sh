#!/usr/bin/env bash
set -e
cd "$HOME/Desktop"
PREVIEW_DIR=$(ls -dt ps-preview-* | head -n 1)
cd "$PREVIEW_DIR"
if rg -n "process\\." src/pages/index.astro >/dev/null 2>&1; then
  gsed -i '' -e 's/process\\.[A-Za-z0-9_]+/""/g' src/pages/index.astro 2>/dev/null || sed -i '' -e 's/process\\.[A-Za-z0-9_]+/""/g' src/pages/index.astro
fi
node -e "let f='astro.config.mjs';let fs=require('fs');if(fs.existsSync(f)){let s=fs.readFileSync(f,'utf8');if(!/defineConfig/.test(s)){s='import { defineConfig } from \"astro/config\"\\n'+s}if(/output:\\s*['\"]server['\"]/||/output:\\s*['\"]hybrid['\"]/){s=s.replace(/output:\\s*['\"][^'\"]+['\"]/,'output: \"static\"')}else if(!/output:/.test(s)){s=s.replace(/defineConfig\\(\\{/, 'defineConfig({ output: \"static\", ')};s=s.replace(/adapter:\\s*[^,}]+,?/g,'');fs.writeFileSync(f,s)}"
npx astro build
node - <<'JS'
const fs=require('fs'),path=require('path')
const root='dist'
function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);const s=fs.statSync(p);s.isDirectory()?walk(p):shim(p)}}
function shim(p){
  if(p.endsWith('.html')){
    let h=fs.readFileSync(p,'utf8')
    if(!/globalThis\.process/.test(h)){
      h=h.replace(/<\/head>/i,'<script>var process=globalThis.process||{env:{}};globalThis.process=process;</script></head>')
      fs.writeFileSync(p,h)
    }
  }
  if(p.endsWith('.mjs')){
    let s=fs.readFileSync(p,'utf8')
    if(/process\./.test(s) && !/^var process=globalThis\.process/m.test(s)){
      s='var process=globalThis.process||{env:{}};globalThis.process=process;\\n'+s
      fs.writeFileSync(p,s)
    }
  }
}
walk(root)
JS
npx serve -s dist -l 4331
