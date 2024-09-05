import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'

  return {
    base: isProduction ? '/' : '/', // Use '/' for both development and production if deploying to root
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      strictPort: true
    },
    build: {
      outDir: 'dist', // Ensures the output directory is 'dist'
      emptyOutDir: true, // Cleans the output directory before building
    }
  }
})
