#!/usr/bin/env bash
set -euo pipefail

# Look for markers anywhere in the tree (layout, sections, etc.)
markers=(
  "Ready to upgrade?"
  "HOAs & Property Managers"
  "Request Quote →"
  "Warranty & Support"
)

hits=0
for m in "${markers[@]}"; do
  if git grep -n --no-color -F -- "$m" -- ':!node_modules' ':!dist' >/dev/null 2>&1; then
    hits=$((hits+1))
  fi
done

# Success only if enough of the middle-version markers exist together.
[ "$hits" -ge 3 ]
