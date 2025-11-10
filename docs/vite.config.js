import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/WebApp2025/',     // <= THIS LINE
  build: {
    outDir: 'docs'          // build straight into /docs for Pages
  }
})