import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/my_website/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@client/app/variables" as *;
          @use "@client/app/mixins" as *;
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@client': path.resolve(__dirname, './src/client'),
      '@shared': path.resolve(__dirname, './src/shared')
    }
  }
})
