import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      src: './src',
      components: './src/components',
    },
  },
  define: {
    'process.env': {
      NEXT_API_BACK_END: JSON.stringify(process.env.NEXT_API_BACK_END),
    },
  },
  base: '/portfolio',
  publicDir: 'public',
});
