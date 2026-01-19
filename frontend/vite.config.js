import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
	  react(),
	basicSsl()
  ],
  server: {
    host: true,
    strictPort: true,
    port: 5173
  },
  preview: {
    host: true,
    port: 5173
  }
})
