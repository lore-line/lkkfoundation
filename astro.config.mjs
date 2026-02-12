import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import icon from "astro-icon";

export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    svelte(),
    icon(),
  ],
  site: "https://limketkaifoundation.org",
});
