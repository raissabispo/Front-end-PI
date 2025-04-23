import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

    server: {
      port: 3000, // ou qualquer outra porta que você preferir
    },
    base: '/Front-end-PI/'
})
