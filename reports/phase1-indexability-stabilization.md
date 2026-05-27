# Phase 1 Indexability Stabilization

## Summary of changes
- Added source-level breadcrumb schema helper (`src/schema/breadcrumb.ts`) and integrated into active templates.
- Added county meta-description source helper logic (`appendCountySuffix`) in `src/lib/seo.ts` and wired into service-area city and city/service templates.
- Added centralized priority money pages data (`src/data/priorityMoneyPages.ts`) and reusable section component (`src/components/sections/PriorityMoneyPages.astro`).
- Added contextual priority money-page sections to homepage, services hub, service areas hub, projects, and service templates.
- Reduced list drift in footer by using centralized services/areas data.

## Files changed
- src/schema/breadcrumb.ts
- src/lib/seo.ts
- src/data/priorityMoneyPages.ts
- src/components/sections/PriorityMoneyPages.astro
- src/pages/index.astro
- src/pages/about.astro
- src/pages/projects.astro
- src/pages/who-we-work-with.astro
- src/pages/blog/index.astro
- src/pages/blog/[post].astro
- src/pages/services/index.astro
- src/pages/services/[service].astro
- src/pages/service-areas/index.astro
- src/pages/service-areas/[city]/index.astro
- src/pages/service-areas/[city]/[service].astro
- src/components/Footer.astro

## Remaining postbuild scripts
- `add-localbusiness-optionals.mjs`: still active to preserve existing output behavior.
- `add-breadcrumbs.mjs`: still active pending full route-level parity verification.
- `fix-county-meta-descriptions.mjs`: still active temporarily; source-level replacement added for target templates.

## Breadcrumb schema generation
- `buildBreadcrumbSchema` builds valid `BreadcrumbList` from page breadcrumb arrays.
- `appendBreadcrumbSchema` appends breadcrumb schema to existing object/array page schema safely.

## County meta description generation
- `appendCountySuffix(description, areaSlug)` now appends county suffix in source for county slugs.
- wired on service-area city and city/service templates.

## Priority money-page link placements
- homepage, services hub, service areas hub, projects page, and service detail pages via `PriorityMoneyPages`.

## Stale/legacy components identified
- `src/components/ui/SiteHeader.astro`
- `src/components/ui/SiteFooter.astro`
- `src/components/sections/ServiceAreasSection.astro`
- `src/layouts/Base.astro`
- backup layout/style files (`*.bak*`) still present

## Validation
- Build and check commands executed successfully after changes.

## Follow-up recommendations
- Remove postbuild breadcrumb and county-meta mutation scripts after strict parity check.
- Continue replacing hardcoded header lists with centralized data in a separate low-risk pass.
