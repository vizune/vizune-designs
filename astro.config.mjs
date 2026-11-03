import { defineConfig } from "astro/config";
import critters from 'astro-critters';

export default defineConfig({
  // Use classes for scoped styles so a parent's styles reach the child components it passes `class` to
  scopedStyleStrategy: 'class',
  vite: {
    build: {
      // Flatten CSS nesting (style.css uses it) so critters and older browsers can read the output
      cssTarget: ['chrome100', 'safari15', 'firefox100'],
    },
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
