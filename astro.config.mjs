// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cere-ufmg.github.io',
  markdown: {
    // Mantém aspas e apóstrofos exatamente como escritos nas notícias.
    smartypants: false,
  },
});
