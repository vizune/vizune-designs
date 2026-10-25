import { defineConfig } from "astro/config";
import tailwind from '@tailwindcss/vite'
import critters from 'astro-critters';

export default defineConfig({
  // Use classes for scoped styles so a parent's styles reach the child components it passes `class` to
  scopedStyleStrategy: 'class',
  vite: {
    plugins: [tailwind()],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@ui': '/src/components/ui',
        '@sections': '/src/components/sections'
      }
    }
  },
  integrations: [critters()]
})
