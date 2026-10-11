import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  plugins: [
    tailwindcss(),
  ],
})