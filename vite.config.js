import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  server: {
    port: 3000,  // Change to any other available port
  },
  base: '/MyPortfolio0.2/', // Use the repository name here
});
