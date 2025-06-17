import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'The-Third-Avenue', // This makes paths relative
  plugins: [react()],
});
