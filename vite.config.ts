// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // port: 8080, // This forces Vite to use 8080
    strictPort: true, // Optional: if 8080 is busy, it won't try another port
  },
})