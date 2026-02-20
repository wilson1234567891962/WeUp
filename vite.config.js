import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Si usas v4

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // Esto asegura que las rutas de los archivos sean relativas
})