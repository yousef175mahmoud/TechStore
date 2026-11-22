import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Enables React support (instant refresh while developing).
export default defineConfig({
  plugins: [react()],
});
