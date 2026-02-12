/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          paper: "#F5F2EB",   /* Rice Paper — primary bg */
          dark: "#162621",    /* Deep Rainforest — text/dark sections */
          earth: "#5D4037",   /* Coconut/Soil — accent */
          gold: "#D4AF37",    /* Muted Sunrise — CTA/highlight */
          clay: "#C49A6C",    /* Dry Leaf — subtle accent */
          white: "#FAFAFA",   /* Off-white — alt bg */
        },
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      maxWidth: {
        container: "90rem", /* 1440px — matches reference */
      },
      spacing: {
        section: "8rem",       /* py-32 equivalent */
        "section-sm": "6rem",  /* py-24 equivalent */
      },
      keyframes: {
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "slow-zoom": "slowZoom 20s infinite alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
