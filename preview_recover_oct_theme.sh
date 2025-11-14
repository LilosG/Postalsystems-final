#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
git rev-parse --is-inside-work-tree >/dev/null
DEST="../ps-verify-recover-oct-theme"
if [ -d "$DEST" ]; then rm -rf "$DEST"; fi
git worktree add "$DEST" recover-oct-theme
cd "$DEST"
if [ -f pnpm-lock.yaml ]; then corepack enable >/dev/null 2>&1 || true; pnpm i; PM=pnpm; elif [ -f yarn.lock ]; then corepack enable >/dev/null 2>&1 || true; yarn; PM=yarn; else npm i; PM=npm; fi
npx astro build
npx serve -s dist -l 4331
