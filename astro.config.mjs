import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import { rehypeProseSections } from "./scripts/rehype-prose-sections.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://telaak.dev",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  markdown: {
    // Groups each `##` and the prose under it, so the writeup layout can put
    // the heading in the label column and its body beside it.
    rehypePlugins: [rehypeProseSections],
    shikiConfig: {
      // A light theme, to sit on the Modernist ground rather than punch a dark
      // rectangle through it.
      theme: "github-light",
      wrap: true,
    },
  },
});
