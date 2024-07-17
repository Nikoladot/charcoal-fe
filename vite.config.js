import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('Vite environment:', process.env.NODE_ENV);

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/charcoal-fe/' : '/', // Ensure correct base path
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    strictPort: true
  }
});
