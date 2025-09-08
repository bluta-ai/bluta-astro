import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bluta.io',
  vite: {
    css: {
      preprocessorOptions: {
        css: {}
      }
    }
  }
});
