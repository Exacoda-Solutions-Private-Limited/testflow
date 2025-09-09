import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'e0feec90-8863-4252-8a01-cb19de2ab754-00-2x63gxj4pqlcw.pike.replit.dev'
    ]
  }
})
