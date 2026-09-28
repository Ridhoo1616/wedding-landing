import { defineConfig } from 'astro/config';

// BASE_PATH diisi otomatis oleh alur kerja GitHub Pages (mis. "/wedding-landing").
export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
});
