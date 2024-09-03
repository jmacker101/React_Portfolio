import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '.netlify/functions/public',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: './public/index.html',
        'static/js/chunk-vendors.js': './src/main.jsx', // Adjust this path if needed
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
