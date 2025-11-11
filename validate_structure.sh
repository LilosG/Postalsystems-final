#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"
./structure_audit.sh
rg -n --glob 'src/pages/**/*' 'service-area/' || true
