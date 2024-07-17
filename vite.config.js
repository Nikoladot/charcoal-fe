import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  console.log('Vite environment:', mode);

  return {
    base: isProduction ? '/charcoal-fe/' : '/', // Ensure correct base path
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    server: {
      strictPort: true
    }
  };
});
