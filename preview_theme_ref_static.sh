#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
git rev-parse --is-inside-work-tree >/dev/null
REF="${REF:-recover-oct-theme}"
HASH=$(git rev-parse "$REF^{commit}")
DEST="../ps-preview-${HASH:0:8}-$(date +%s)"
git worktree add --detach "$DEST" "$HASH"
cd "$DEST"
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; PM=pnpm; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; PM=yarn; else npm i; PM=npm; fi
node -e "let f='astro.config.mjs';let fs=require('fs');if(fs.existsSync(f)){let s=fs.readFileSync(f,'utf8');if(!/defineConfig/.test(s)){s='import { defineConfig } from \"astro/config\"\\n'+s}if(/output:\\s*['\"]server['\"]/||/output:\\s*['\"]hybrid['\"]/){s=s.replace(/output:\\s*['\"][^'\"]+['\"]/,'output: \"static\"')}else if(!/output:/.test(s)){s=s.replace(/defineConfig\\(\\{/, 'defineConfig({ output: \"static\", ')};s=s.replace(/adapter:\\s*[^,}]+,?/g,'');fs.writeFileSync(f,s)}"
npx astro build
npx serve -s dist -l 4331
