# Postal Systems (sandiegocommercialmailboxes.com) — Codex/Kilo Context Pack
**Goal:** Fix the audit issues and elevate the Astro + Tailwind site to “$25k agency” quality **without** changing the core brand/theme (no rebrand, no palette overhaul, no new “look” direction).  
**Non‑negotiables:** best practices only; scalable data blobs; consistent templates; no one‑shot hacks; no temporary patches.

---

## 1) Hard Constraints (must follow)
### 1.1 Visual / brand constraints
- Keep the current overall theme, colors, and general layout direction.
- Allowed: polish, spacing rhythm, typography hierarchy, component consistency, states (hover/focus/active), and refined section composition.
- Not allowed: major redesign, new color system, re-theming, “design trend” experiments.

### 1.2 Architecture constraints
- **Single source of truth** for content via central data blobs (JSON/TS), so content scales across:
  - `/services/[service]/`
  - `/service-areas/[city]/`
  - `/service-areas/[city]/[service]/` (money pages)
  - Blog posts (content collection)  
- **Templates must stay consistent**: page structure + UX pattern should be consistent by type.
- **No thin / duplicate content** on indexable programmatic pages.
- All changes must be systematic and reusable (components/tokens/utilities) — not per-page tweaks.

### 1.3 Workflow constraints
- Tranche-based work; no mega commits.
- Every tranche must include:
  - `git diff --stat`
  - `npm run typecheck`
  - `npm run check`
  - `npm run build`
  - Verification checklist (what to check in browser)

---

## 2) Audit Findings to Address (prioritized)
### Critical
1) **Build fails with ENOENT writing to `node_modules/.astro`**  
   - Root cause is very likely Astro `cacheDir` defaulting to `./node_modules/.astro` in environments where the folder is missing or not writable.
   - Fix must be best-practice and deterministic (no brittle “mkdir node_modules” hacks in CI).

2) **Duplicate / thin content risk across city+service pages**
   - 13 cities × 8 services = 104 pages; if content falls back to generic blocks, indexing suffers.
   - Implement a **uniqueness strategy** (below) and/or reduce generation surface area.

### High
3) **Internal linking depth**
   - Nav/footer only exposes subsets of services/areas → long-tail pages become 3+ clicks deep.
   - Fix with hub → spoke linking and “related” modules.

4) **Sitemap / robots serving must be verified**
   - robots points at `/sitemap-index.xml`; confirm it exists and includes all intended *indexable* URLs.

### Medium
5) **Breadcrumb schema injection risk in SSR**
   - If breadcrumb JSON-LD is injected “postbuild” into static HTML only, SSR responses may miss it.
   - Ensure breadcrumbs schema is rendered at request/build time in templates/components.

6) **CWV/perf basics**
   - Above-the-fold hero image must be eager and sized (avoid CLS; improve LCP).
   - Prefer Astro asset pipeline or at minimum width/height + responsive sizing.

7) **Accessibility**
   - Homepage form needs labels (not placeholder-only).

---

## 3) Required Content Uniqueness Strategy (programmatic pages)
### 3.1 Page-type minimums (indexable)
**For each `/service-areas/{city}/{service}/` page:**
- Unique hero/intro copy (city + service context) from data blob (not generated ad-hoc).
- 2–4 unique “local proof” items (projects, photos, process notes, local constraints, HOA/compliance mentions, etc.) selected from structured data.
- Unique FAQ set (at least 4 Q&As) that differs per city OR per service (prefer city+service).
- Unique internal links module:
  - “Related services in {city}”
  - “Nearby service areas”
  - Links to 1–2 relevant blog posts

### 3.2 If uniqueness is not available
Choose ONE deterministic strategy (no half-measures):
- **Option A (preferred):** only generate city+service pages when content exists (tight `getStaticPaths`).
- **Option B:** generate all pages but set **`noindex` and exclude from sitemap** for any page failing uniqueness thresholds.
- **Option C:** canonical thin city+service pages to the parent city page or service page (only if genuinely duplicative).

---

## 4) Data Blob Design (proposed)
Keep existing `services.json` and `areas.json`. Add a new central file (or folder) for city/service uniqueness.

### 4.1 New data file (recommended)
`src/data/city-service-content.json` (single file) **or** `src/data/city-service-content/{city}.json` (per city).
Schema (example):
```json
{
  "carlsbad": {
    "city": "Carlsbad",
    "county": "San Diego County",
    "serviceOverrides": {
      "cbu-installation": {
        "hero": {
          "headline": "CBU Installation in Carlsbad",
          "subheadline": "HOA-ready cluster mailbox installs, ADA/USPS alignment, and clean punchlists."
        },
        "intro": [
          "1–2 paragraphs of unique copy..."
        ],
        "proofPoints": ["proj-123", "proj-456"],
        "faqs": [
          {"q": "Question", "a": "Answer"},
          {"q": "Question", "a": "Answer"}
        ],
        "localNotes": [
          {"title": "HOA coordination", "body": "…"},
          {"title": "ADA clearances", "body": "…"}
        ],
        "internalLinks": {
          "relatedServices": ["mailbox-repair", "parcel-lockers"],
          "relatedCities": ["oceanside", "encinitas"],
          "relatedPosts": ["cbu-installation-checklist-for-hoa-boards"]
        }
      }
    }
  }
}
```

### 4.2 Enforce template-consistent rendering
- Templates must render the same module order for each page type.
- Modules read from data; “generic fallbacks” allowed only for truly global content blocks, never for primary unique sections.

---

## 5) Implementation Tranches (recommended order)
### Tranche 0 — Unblock builds (must pass)
- Fix Astro cache directory deterministically (via `astro.config.*`).
- Confirm `npm run build` passes locally and in CI/Vercel.

### Tranche 1 — Sitemap/robots + canonical host verification
- Ensure `/robots.txt`, `/sitemap-index.xml`, `/sitemap.xml` behavior matches intent.
- Ensure canonical host consistency and trailing slash policy.

### Tranche 2 — Content blob + uniqueness enforcement
- Add new data schema.
- Update templates to pull unique content.
- Implement generation/noindex/canonical strategy.

### Tranche 3 — Internal linking architecture
- Improve hub pages (`/services/`, `/service-areas/`) and add “related” blocks to templates.
- Ensure long-tail pages are reachable within ≤2 clicks from hubs.

### Tranche 4 — Breadcrumb schema + structured data hygiene
- Render BreadcrumbList in templates/components (not postbuild-only).
- Verify no duplicate schema blocks and schema matches visible content.

### Tranche 5 — Perf + a11y wins
- Hero images: eager + sizes + dimensions.
- Adopt Astro assets for responsive images if feasible.
- Add proper form labels.

### Tranche 6 — Agency-grade polish (within theme)
- Introduce/standardize layout primitives (Section/Container), Card system, Button/Input states.
- Equal-height grids, consistent padding/radius/shadows, consistent typography scale.
- No palette changes; refine spacing and hierarchy.

---

## 6) Acceptance Criteria (definition of “done”)
- `npm run build` passes consistently.
- All indexable programmatic pages meet uniqueness requirements OR are excluded/noindexed deterministically.
- Sitemaps include only indexable URLs; robots points to correct sitemap.
- Breadcrumb schema present on all relevant pages in deployed output.
- CWV basics improved: no lazy above-the-fold hero; images sized; reduced CLS.
- Visual polish meets “agency grade” without changing theme.

