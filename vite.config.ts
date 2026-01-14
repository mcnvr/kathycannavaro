import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    // Copy data directory to dist during build
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
