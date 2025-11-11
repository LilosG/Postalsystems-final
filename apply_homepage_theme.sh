#!/usr/bin/env bash
set -euo pipefail

# 1) Beef up the USPS theme tokens/utilities (keeps your existing file, appends rules)
mkdir -p src/styles
cat >> src/styles/theme.css <<'CSS'

/* --- USPS Theme Enhancements --- */
:root{
  --ps-blue:#0b2d5a;     /* deep navy (hero) */
  --ps-blue-600:#153e7a; /* mid */
  --ps-blue-50:#eef4fc;  /* light tint backgrounds */
  --ps-red:#e03131;      /* CTA red */
  --ps-text:#0f172a;
  --ps-muted:#64748b;
  --ps-card:#ffffff;
  --ps-ring:rgba(21,62,122,.25);
}

html,body { color: var(--ps-text); }
a { color: var(--ps-blue-600); text-underline-offset: 2px; }

/* Hero section (Screenshot #1 style) */
.section-hero{
  background: var(--ps-blue);
  color: #fff;
  padding: 56px 0;
}
.section-hero .eyebrow{ letter-spacing:.12em; opacity:.9; font-size:.72rem; text-transform:uppercase }
.section-hero .title{ font-size: clamp(1.6rem, 1.1rem + 2vw, 2.25rem); font-weight: 700; line-height:1.15 }
.section-hero .lede{ opacity:.92; max-width: 58ch }

/* CTA buttons */
.btn-primary{ background: var(--ps-red); color:#fff; border-radius:.5rem; padding:.625rem 1rem; display:inline-block; font-weight:600 }
.btn-primary:focus{ outline:3px solid var(--ps-ring); outline-offset:2px }
.btn-secondary{ background: #fff; color: var(--ps-blue); border-radius:.5rem; padding:.625rem 1rem; font-weight:600; display:inline-block }

/* Trust bar + stat pills */
.trustbar{ background:#fff; border-radius:.75rem; box-shadow:0 1px 0 rgba(0,0,0,.04); }
.pills{ display:flex; gap:.5rem; flex-wrap:wrap }
.pill{ font-size:.75rem; background:var(--ps-blue-50); color: var(--ps-blue-600); padding:.4rem .6rem; border-radius:999px }
.stat{ background:#fff; border:1px solid #e5e7eb; border-radius:.75rem; padding:14px; text-align:center }
.stat .v{ font-weight:800 }

/* Section shells */
.section{ padding: 48px 0 }
.section-muted{ background:#f8fafc; }
.card{ background:var(--ps-card); border:1px solid #e5e7eb; border-radius:.75rem; padding:16px }
.grid-3{ display:grid; gap:12px; grid-template-columns: repeat(1,minmax(0,1fr)) }
@media (min-width: 720px){ .grid-3{ grid-template-columns: repeat(3,minmax(0,1fr)) } }

/* Simple container */
.container{ max-width: 1120px; margin: 0 auto; padding: 0 16px }
CSS

# 2) Replace the homepage with a USPS-blue hero + trust bar + stats (keeps your content below)
HOME=src/pages/index.astro
cp "$HOME" "_backup.index.$(date +%s).astro"

cat > "$HOME" <<'ASTRO'
---
import BaseLayout from "../layouts/BaseLayout.astro";

/** Page meta */
const pageTitle = "Mailbox Installation, Done Right. | Postal Systems";
const desc = "USPS-approved vendor & licensed California contractor serving San Diego County. We install, repair & upgrade community and commercial mailboxes.";
const url = undefined;
---

<BaseLayout title={pageTitle} description={desc} url={url}>

  <!-- USPS Blue Hero -->
  <section class="section-hero">
    <div class="container grid" style="grid-template-columns: 1.2fr .9fr; gap: 24px">
      <div>
        <div class="eyebrow">USPS-APPROVED CONTRACTOR</div>
        <h1 class="title">Mailbox Installation,<br/> Done Right.</h1>
        <p class="lede" style="margin-top:10px">{desc}</p>

        <div style="margin-top:16px; display:flex; gap:10px; flex-wrap:wrap">
          <a href="/contact/" class="btn-primary">Get a Quote</a>
          <a href="tel:16194614787" class="btn-secondary">Call (619) 461-4787</a>
        </div>

        <div class="pills" style="margin-top:14px">
          <span class="pill">USPS-approved</span>
          <span class="pill">Licensed / Bonded / Insured — CA Lic. #904106</span>
          <span class="pill">ADA-compliant installs</span>
        </div>
      </div>

      <div class="trustbar card" style="align-self:start">
        <img src="/images/hero-mailbox.jpg" alt="Commercial mailbox install" style="width:100%; border-radius:.5rem; display:block" loading="eager" />
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:10px">
          <div class="stat"><div class="v">20+ years</div><div class="k">experience</div></div>
          <div class="stat"><div class="v">500+</div><div class="k">projects</div></div>
          <div class="stat"><div class="v">100%</div><div class="k">USPS sign-off</div></div>
          <div class="stat"><div class="v">30+</div><div class="k">cities served</div></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core services teaser (keeps the rest of your existing blocks below) -->
  <section class="section">
    <div class="container">
      <h2 style="font-size:1.25rem; font-weight:700; margin-bottom:8px">Core Services</h2>
      <p style="color:var(--ps-muted); margin-bottom:12px">Compliance-focused installs & replacements with USPS coordination and inspection sign-off.</p>
      <div class="grid-3">
        <div class="card">
          <strong>Commercial Mailbox Installation</strong>
          <p>USPS approvals & inspection. Pads, anchors, tenant notice.</p>
        </div>
        <div class="card">
          <strong>Cluster Box Units (CBUs)</strong>
          <p>Site planning, concrete pads & anchors, sign-off.</p>
        </div>
        <div class="card">
          <strong>4C / Wall-Mounted Mailboxes</strong>
          <p>Interior/exterior banks with ADA clearances.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- You still have your existing sections after this file; expand as needed -->
</BaseLayout>
ASTRO

# 3) Rebuild
rm -rf dist .astro
npx astro build
echo "✅ Homepage theme applied. Start server and hard-refresh:"
echo "   npx serve -s dist -l 5050"
echo "   # then visit http://localhost:5050/?v=$(date +%s)"
