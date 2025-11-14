#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
git rev-parse --is-inside-work-tree >/dev/null
REF="${REF:-recover-oct-theme}"
CUR=$(git rev-parse --abbrev-ref HEAD)
if [ "$CUR" = "$REF" ]; then
  if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; PM=pnpm; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; PM=yarn; else npm i; PM=npm; fi
  npx astro build
  npx serve -s dist -l 4331
  exit 0
fi
HASH=$(git rev-parse "$REF")
DEST="../ps-verify-${REF//\//_}-$(date +%s)"
git worktree add --detach "$DEST" "$HASH"
cd "$DEST"
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; PM=pnpm; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; PM=yarn; else npm i; PM=npm; fi
npx astro build
npx serve -s dist -l 4331
