#!/usr/bin/env bash
set -e
cd "$HOME/Desktop"
PREVIEW_DIR=$(ls -dt ps-preview-* | head -n 1)
cd "$PREVIEW_DIR"
node - <<'JS'
const fs=require('fs'),path=require('path')
const root='dist'
function walk(d){for(const f of fs.readdirSync(d)){const p=path.join(d,f);const s=fs.statSync(p);if(s.isDirectory()) walk(p); else fix(p)}}
function fix(p){
  if(p.endsWith('.mjs')){
    let s=fs.readFileSync(p,'utf8')
    if(/process\./.test(s) && !/^var process=globalThis\.process/m.test(s)){
      s='var process=globalThis.process||{env:{}};globalThis.process=process;\n'+s
      fs.writeFileSync(p,s)
    }
  }
  if(p.endsWith('.html')){
    let h=fs.readFileSync(p,'utf8')
    if(!/globalThis\.process/.test(h)){
      h=h.replace(/<\/head>/i,'<script>var process=globalThis.process||{env:{}};globalThis.process=process;</script></head>')
      fs.writeFileSync(p,h)
    }
  }
}
walk(root)
JS
npx serve -s dist -l 4331
