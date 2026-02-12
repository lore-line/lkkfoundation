# Next Steps — Limketkai Foundation Website

Maps directly to [docs/tasks.md](docs/tasks.md). Scaffold covers **Phase 2 (Setup)** and **Phase 3 (Layout & Core UI)** structurally. Below is what to implement next, phase by phase.

---

## Phase 2 — Setup (Finalize)

- [ ] Run `npm install` and verify dev server starts
- [ ] Initialize GitHub repository and push scaffold
- [ ] Connect repo to Cloudflare Pages (build command: `npm run build`, output: `dist/`)
- [ ] Create Sanity project (`npx sanity@latest init`) and update `.env` with project ID
- [ ] Seed initial Sanity content (pillars, sample programs)
- [ ] Configure ESLint + Prettier (optional but recommended)

## Phase 3 — Layout & Core UI (Finalize)

- [ ] Implement mobile slide-out menu in Header
- [ ] Add responsive breakpoint testing
- [ ] Refine SectionWrapper padding/spacing against reference.html
- [ ] Add icon system (Iconify or inline SVGs to replace placeholder icons)

## Phase 4 — Home Page (Build Out)

- [ ] Hero: Add real photography, optimize with Astro `<Image />`
- [ ] Legacy: Add heritage image + finalize copy
- [ ] PlantGrowthSection: Implement scroll-driven SVG animation (see PRD §7)
  - Sticky container, ~200-300vh scroll height
  - Seed → stem → leaves → full plant
  - `prefers-reduced-motion` fallback (static state already scaffolded)
- [ ] PillarsGrid: Add real images, connect to Sanity Pillar model
- [ ] FeaturedPrograms: Fetch from Sanity instead of hardcoded data
- [ ] ImpactSnapshot: Connect to Sanity ImpactMetric + Story models
- [ ] CTASection: Finalize copy

## Phase 5 — Programs

- [ ] Connect Programs listing to Sanity (`sanityClient.fetch(queries.allPrograms)`)
- [ ] Build Svelte filter island for pillar/status filtering
- [ ] Implement Program detail template with Sanity data (gallery, impact bullets, CTAs)
- [ ] Update `getStaticPaths()` to dynamically pull slugs from Sanity

## Phase 6 — Impact & News

- [ ] Impact page: Fetch metrics, stories, events from Sanity
- [ ] News listing: Fetch posts from Sanity
- [ ] Post detail: Render Sanity portable text with `@portabletext/svelte` or similar
- [ ] Events listing with date formatting

## Phase 7 — Get Involved

- [ ] Integrate donation platform (external embed or link)
- [ ] Build volunteer form (name, email, interest area) with validation
- [ ] Build partner inquiry form
- [ ] Add form success/error states
- [ ] Wire newsletter form in Footer

## Phase 8 — Optimization

- [ ] Accessibility audit (WCAG AA target)
- [ ] Lighthouse performance pass (target >85)
- [ ] Finalize SEO meta for all pages (title, description, OG tags already scaffolded)
- [ ] Open Graph images
- [ ] Test `prefers-reduced-motion` fallback for PlantGrowthSection

## Phase 9 — Launch

- [ ] Final content review with stakeholders
- [ ] Connect custom domain in Cloudflare
- [ ] Production deploy
- [ ] Analytics integration (Cloudflare Web Analytics or similar)
- [ ] Backup & monitoring setup
