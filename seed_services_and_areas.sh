#!/usr/bin/env bash
set -e
cd "$HOME/Desktop/Postalsystems-final" 2>/dev/null || cd "$HOME/Desktop/postalsystems-final"

mkdir -p src/data

cat > src/data/services.json <<'JSON'
[
  {
    "name": "Commercial Mailbox Installation",
    "summary": "Turnkey commercial mailbox installs with USPS coordination and inspection sign-off.",
    "content": ""
  },
  {
    "name": "CBU Installation",
    "summary": "USPS-approved Cluster Box Unit (CBU) installs for HOAs, apartments, and commercial sites.",
    "content": ""
  },
  {
    "name": "4C Wall-Mounted Mailboxes",
    "summary": "Interior/exterior 4C wall-mounted or recessed systems with rough-opening coordination and ADA compliance.",
    "content": ""
  },
  {
    "name": "Parcel Lockers",
    "summary": "Add secure parcel lockers compatible with existing CBU/4C setups to reduce package pileups.",
    "content": ""
  },
  {
    "name": "Repairs & Lock Changes",
    "summary": "Door/lock replacements, vandalism remediation, and compartment fixes with fast turnaround.",
    "content": ""
  },
  {
    "name": "ADA-Compliant Installs",
    "summary": "Mailroom build-outs and height/clearance checks for ADA and USPS specifications.",
    "content": ""
  },
  {
    "name": "Mailbox Replacement & Retrofits",
    "summary": "Remove and replace aging units; pads, pedestals, labeling, and USPS handoff.",
    "content": ""
  },
  {
    "name": "Mailbox Relocation & Consolidation",
    "summary": "Move or consolidate units, pour/patch pads, update addressing, and coordinate USPS changeover.",
    "content": ""
 ]
JSON

cat > src/data/areas.json <<'JSON'
[
  { "city": "San Diego", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Chula Vista", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Oceanside", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Carlsbad", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Encinitas", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Escondido", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Vista", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "San Marcos", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Poway", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "El Cajon", "state": "CA", "county": "San Diego", "priority": 1 },
  { "city": "Temecula", "state": "CA", "county": "Riverside", "priority": 2 },
  { "city": "Riverside County", "state": "CA", "county": "", "priority": 3 },
  { "city": "Orange County", "state": "CA", "county": "", "priority": 3 }
]
JSON

npx astro build || true
./structure_audit.sh || true
