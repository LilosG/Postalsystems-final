#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
TS=$(date +%s)
mkdir -p .restore_backups/src/layouts
cp -a src/layouts/SiteLayout.astro ".restore_backups/src/layouts/SiteLayout.astro.$TS.current"
git checkout recover-oct-theme -- src/layouts/SiteLayout.astro
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
