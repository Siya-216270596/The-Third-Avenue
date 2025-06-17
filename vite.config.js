import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',      // ← ensure all imports are relative
  plugins: [react()],
})
