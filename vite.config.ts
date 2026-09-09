import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Set VITE_BASE=/<repo>/ when deploying to a GitHub Pages project site.
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), tailwindcss()],
})
