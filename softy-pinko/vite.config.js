import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages uses the repository subpath; Vercel serves from the domain root.
  base: process.env.GITHUB_ACTIONS ? '/softy-pinko/' : '/',
})
