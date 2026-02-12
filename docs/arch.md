1\. Tech Stack



Frontend:



Astro (static + hybrid rendering)



Tailwind CSS



Minimal Svelte islands (for filters/interactive pieces)



CMS:



Sanity



Hosting:



Vercel (recommended)



2\. Rendering Strategy

Static Pages



Home



Our Story



Contact



Get Involved landing



Hybrid (SSG + CMS Data)



Programs



Program Detail



News



Impact



3\. Data Models (Sanity)

Pillar



title



description



icon



order



Program



title



slug



pillar (reference)



status (Active / Upcoming / Planned)



summary



fullDescription



impactBullets



gallery



CTA links



Event



title



date



location



description



registrationLink



Post



title



slug



body



tags



featuredImage



ImpactMetric



label



value



timeframe



description



Story



name



role



content



image



4\. Component Architecture

Layout



Header



Footer



SEO component



Home Components



Hero



LegacySection



PlantGrowthSection



PillarsGrid



FeaturedPrograms



ImpactSnapshot



CTASection



Shared Components



ProgramCard



MetricCard



PostCard



Button



SectionWrapper



5\. Scroll Animation Architecture



Dedicated PlantGrowthSection component.



Sticky container within extended scroll section.



SVG animation controlled via scroll progress.



Isolated JS module.



No dependency on CMS.



6\. Routing



/



/our-story



/programs



/programs/\[slug]



/impact



/news



/news/\[slug]



/get-involved



/contact



7\. Performance Strategy



Image optimization.



SVG for animation (no video).



Lazy-load CMS-heavy sections.



Avoid large JS bundles.

