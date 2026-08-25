import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://blutech.io',
  vite: {
    css: {
      preprocessorOptions: {
        css: {}
      }
    }
  }
});
