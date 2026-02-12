import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    svelte(),
  ],
  site: "https://limketkaifoundation.org",
});
