import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Explicitly set root to current directory
  root: process.cwd(),
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})