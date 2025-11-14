#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
git rev-parse --is-inside-work-tree >/dev/null
REF="${REF:-recover-oct-theme}"
mkdir -p .restore_backups
TS=$(date +%s)
FILES="
tailwind.config.mjs
tailwind.config.cjs
tailwind.config.js
src/styles/base.css
src/styles/global.css
src/styles/tailwind.css
src/styles/tokens.css
src/layouts/Base.astro
src/layouts/BaseLayout.astro
src/layouts/MarketingPage.astro
src/layouts/SiteLayout.astro
src/components/Header.astro
src/components/Footer.astro
src/components/PromoBanner.astro
src/components/TrustBadges.astro
src/components/ui
src/components/sections
"
for f in $FILES; do
  if [ -e "$f" ]; then
    mkdir -p ".restore_backups/$(dirname "$f")"
    cp -a "$f" ".restore_backups/$(dirname "$f")/$(basename "$f").$TS.current"
  fi
done
git checkout "$REF" -- $FILES
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; PM=pnpm; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; PM=yarn; else npm i; PM=npm; fi
npx astro build >/dev/null || true
echo "theme_restore=ok backups=.restore_backups timestamp=$TS"
