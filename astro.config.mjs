// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://miguelanguai.github.io',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
