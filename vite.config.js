import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'icons',   // pasta na raiz do projeto
          dest: ''        // copia direto pra raiz do dist/
        },
        {
          src: 'screenshots',
          dest: ''
        }
      ]
    })
  ]
});
