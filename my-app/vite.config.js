import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // if applicable
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})