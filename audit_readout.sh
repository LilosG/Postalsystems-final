#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
ls -l reports || true
if [ -f reports/lighthouse.json ]; then
  jq -r '.categories | "Performance: \(.performance.score*100|floor)\nAccessibility: \(.accessibility.score*100|floor)\nBest Practices: \(.["best-practices"].score*100|floor)\nSEO: \(.seo.score*100|floor)"' reports/lighthouse.json
  jq -r '.audits["meta-description"].title + ": " + (.audits["meta-description"].displayValue//"")'
fi
