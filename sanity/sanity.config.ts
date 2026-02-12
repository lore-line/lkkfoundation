/**
 * Sanity Studio configuration placeholder
 *
 * To initialize a full Sanity Studio:
 *   npx sanity@latest init --env
 *
 * This file serves as a reference for the schema structure.
 * See sanity/schemas/index.ts for all document types.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "lkkfoundation",
  title: "Limketkai Foundation",
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
