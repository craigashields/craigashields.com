import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import partytown from "@astrojs/partytown";

import mdx from '@astrojs/mdx';

export default defineConfig({
  site: "https://craigashields.com",
  integrations: [mdx(),partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
});