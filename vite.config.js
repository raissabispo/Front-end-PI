import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ou apenas remova a linha inteira
// Defina o subdiretório de hospedagem aqui
})
