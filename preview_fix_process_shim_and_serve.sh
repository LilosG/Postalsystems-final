#!/usr/bin/env bash
set -e
cd "$HOME/Desktop" && DEST_DIR=$(ls -d ps-preview-* | tail -n 1)
cd "$DEST_DIR"
SHIM_JS='var process=globalThis.process||{env:{}};globalThis.process=process;'
node - <<'JS'
const fs=require('fs'),path=require('path')
function walk(dir,fn){for(const e of fs.readdirSync(dir)){const p=path.join(dir,e);const s=fs.statSync(p);s.isDirectory()?walk(p,fn):fn(p)}}
const root='dist'
walk(root,(p)=>{
  if(p.endsWith('.html')){
    let h=fs.readFileSync(p,'utf8')
    if(!/globalThis\.process/.test(h)){
      h=h.replace(/<\/head>/i,'<script>var process=globalThis.process||{env:{}};globalThis.process=process;</script></head>')
      fs.writeFileSync(p,h)
    }
  }
})
walk(root,(p)=>{
  if(p.endsWith('.mjs')){
    let s=fs.readFileSync(p,'utf8')
    if(/process\./.test(s) && !/^var process=globalThis\.process/m.test(s)){
      s='var process=globalThis.process||{env:{}};globalThis.process=process;\n'+s
      fs.writeFileSync(p,s)
    }
  }
})
JS
npx serve -s dist -l 4331
