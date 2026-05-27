# Phase 2 Money Page Strengthening

## Files changed
- `src/pages/service-areas/[city]/[service].astro`
- `src/data/city-service-content/commercial-mailbox-installation.json`
- `src/data/city-service-content/cbu-installation.json`
- `src/data/city-service-content/4c-wall-mounted-mailboxes.json`
- `src/data/city-service-content/mailbox-replacement-retrofits.json`
- `src/pages/projects.astro`
- `scripts/audit-money-page-content.mjs`
- `package.json`

## Priority pages strengthened
All 14 requested priority URLs were enriched through city+service JSON updates and template-level rendering support.

## Fields added or surfaced
Surfaced optional fields in template:
- `localUseCases`
- `propertyTypes`
- `commonTriggers`
- `scopeDetails`
- `complianceNotes`
- `projectSignals`
- `decisionFactors`
- `serviceSpecificFaqs`
- `internalLinkNotes` (stored for future rendering usage)

## FAQ improvements
- Added city/service specific FAQ entries in `serviceSpecificFaqs` for all priority pages.
- Kept existing `faqs` and rendered both blocks only when present.

## Project/internal link improvements
- Added contextual paragraph in `projects.astro` linking naturally to high-intent city/service pages.
- Retained `PriorityMoneyPages` module for broader related discovery.

## Validation results
- `npm run build` passed.
- `npm run check` passed.
- `npm run verify:seo` currently fails intermittently in this environment with Astro prerender module-resolution error during repeated build chain.
- `npm run verify:money-pages` runs and reports gaps (non-destructive) for missing optional enhancements and missing explicit project-page references.
- `dist/client` page count remains 137.
- No `noindex` added to money pages.
- No review schema fields (`AggregateRating`/reviewRating) introduced.

## Remaining risks
- `verify:seo` instability appears environmental/intermittent; should be re-run in CI or clean local environment.
- Some priority pages still missing `projectSignals` field values, and not all priority URLs are explicitly referenced from `projects.astro` body text.

## Phase 3 recommendations
1. Close remaining audit gaps by filling `projectSignals` for flagged pages.
2. Expand contextual project-to-money-page references by project type (without link-stuffing).
3. Add deterministic parser for `priorityMoneyPages.ts` into audit script to avoid dual-source drift.
4. Optionally render `internalLinkNotes` visibly when wording quality is finalized.
