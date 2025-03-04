import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Replace with your desired port number
    strictPort: true, // Set to true to ensure the server exits if the port is already in use
  },
})
