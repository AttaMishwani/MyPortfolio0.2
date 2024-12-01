import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages config
export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio0.2/',  // Repository name
  server: {
    port: 3000,  // Optional: Change if needed
  }
});
