import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/figma_for_non_designers_2609v1/',
  plugins: [react(), tailwindcss()],
});
