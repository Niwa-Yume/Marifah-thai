// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Site 100 % statique : `astro build` produit dist/, que Vercel sert tel quel.
export default defineConfig({
  integrations: [react()],
});
