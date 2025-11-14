#!/usr/bin/env bash
set -u

echo "=== tokens.css (source of truth for brand colors) ==="
sed -n '1,80p' src/styles/tokens.css || echo "tokens.css missing"

echo
echo "=== tailwind.config.mjs color mapping ==="
sed -n '1,120p' tailwind.config.mjs || echo "tailwind.config.mjs missing"

echo
echo "=== Where custom brand utilities are used ==="
rg "bg-ps-navy|bg-ps-red|ps-navy|ps-red|ps-surface" src -n || echo "no ps-* utilities found"

echo
echo "=== Check for rogue Tailwind palette colors still in use ==="
rg "bg-(indigo|violet|purple|slate|blue)-[0-9]{2,3}" src -n || echo "no rogue blue/purple Tailwind bg classes found"
rg "bg-\\[[^]]+\\]" src -n || echo "no arbitrary bg hex classes found"

echo
echo "=== Hero section snippet (first 120 lines of index.astro) ==="
sed -n '1,120p' src/pages/index.astro || echo "index.astro missing"
