/**
 * Sanity client — arch.md §1 (CMS: Sanity)
 * Configured via environment variables (see .env.example)
 */
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: true,
});

/**
 * Reusable GROQ queries — add as needed during implementation phases
 */
export const queries = {
  allPillars: `*[_type == "pillar"] | order(order asc)`,
  allPrograms: `*[_type == "program"] | order(_createdAt desc) { ..., pillar-> }`,
  programBySlug: `*[_type == "program" && slug.current == $slug][0] { ..., pillar-> }`,
  allPosts: `*[_type == "post"] | order(publishedAt desc)`,
  postBySlug: `*[_type == "post" && slug.current == $slug][0]`,
  allEvents: `*[_type == "event"] | order(date asc)`,
  allMetrics: `*[_type == "impactMetric"]`,
  allStories: `*[_type == "story"]`,
};
