import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  }
})
