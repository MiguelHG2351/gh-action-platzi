import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://miguelhg2351.github.io/gh-action-platzi/',
  plugins: [react()]
})
