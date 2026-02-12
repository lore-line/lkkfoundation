# Limketkai Foundation Website

Modern foundation website built with **Astro**, **Tailwind CSS**, **Sanity CMS**, and deployed on **Cloudflare Pages**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── home/           # Home page sections
│   │   ├── shared/         # Reusable components
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/              # File-based routing
│   ├── styles/
│   │   └── global.css
│   └── lib/
│       └── sanity.ts       # Sanity client
├── sanity/
│   ├── schemas/            # CMS content models
│   └── sanity.config.ts
├── public/                 # Static assets
└── docs/                   # Spec docs (PRD, arch, tasks)
```

## 🎨 Design System

Extracted from [reference/reference.html](reference/reference.html):

### Colors
- **brand-paper** `#F5F2EB` — Rice Paper (primary background)
- **brand-dark** `#162621` — Deep Rainforest (text/dark sections)
- **brand-earth** `#5D4037` — Coconut/Soil (accent)
- **brand-gold** `#D4AF37` — Muted Sunrise (CTAs/highlights)
- **brand-clay** `#C49A6C` — Dry Leaf (subtle accent)
- **brand-white** `#FAFAFA` — Off-white (alt background)

### Typography
- **Serif**: Playfair Display (headings, emphasis)
- **Sans**: Inter (body, UI)

### Container
- Max-width: `90rem` (1440px)
- Padding: `px-6 md:px-10`

## 🗂️ Sanity CMS Setup

1. Create a Sanity project:
   ```bash
   npm create sanity@latest -- --env
   ```

2. Update `.env`:
   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id
   PUBLIC_SANITY_DATASET=production
   ```

3. Deploy schemas to Sanity Studio:
   ```bash
   cd sanity
   npx sanity deploy
   ```

4. Seed initial content via Sanity Studio

## ☁️ Cloudflare Pages Deployment

### One-Time Setup
1. Push code to GitHub
2. Connect repository to Cloudflare Pages
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`

### Environment Variables (Cloudflare Dashboard)
Add these in Pages → Settings → Environment variables:
```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
PUBLIC_SITE_URL=https://limketkaifoundation.org
```

## 📋 Implementation Phases

See [NEXT_STEPS.md](NEXT_STEPS.md) for the full roadmap mapped to [docs/tasks.md](docs/tasks.md).

**Current state**: Scaffold complete (Phase 2 + Phase 3 structure)

**Next phase**: Phase 4 — Build out home page components with real content

## 🧭 Routes

| Route | Page | Status |
|---|---|---|
| `/` | Home | ✅ Scaffolded |
| `/our-story` | Founder Legacy + Mission/Vision | ✅ Scaffolded |
| `/programs` | Programs Listing | ✅ Scaffolded |
| `/programs/[slug]` | Program Detail | ✅ Scaffolded |
| `/impact` | Metrics + Stories + Events | ✅ Scaffolded |
| `/news` | News/Blog Listing | ✅ Scaffolded |
| `/news/[slug]` | Post Detail | ✅ Scaffolded |
| `/get-involved` | Donate + Volunteer + Partner | ✅ Scaffolded |
| `/contact` | Contact Form | ✅ Scaffolded |

## 🎯 Spec Documents

- [docs/prd.md](docs/prd.md) — Product Requirements (sitemap, goals, pages)
- [docs/arch.md](docs/arch.md) — Technical Architecture (stack, data models, rendering)
- [docs/tasks.md](docs/tasks.md) — Phase-by-phase implementation checklist
- [reference/reference.html](reference/reference.html) — Approved UI reference

## 🛠️ Tech Stack

- **Framework**: [Astro 5.x](https://astro.build)
- **Styling**: [Tailwind CSS 3.x](https://tailwindcss.com)
- **CMS**: [Sanity](https://www.sanity.io)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Islands**: Svelte (for interactive filters only)

## 📝 License

Copyright © 2024 Limketkai Foundation, Inc. All rights reserved.
