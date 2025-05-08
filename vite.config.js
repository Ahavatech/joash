
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5000,
    hmr: {
      clientPort: 443,
      host: '0.0.0.0'
    }
  }
});
