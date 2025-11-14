#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; else npm i; fi
npx astro dev --port 4331 --host
