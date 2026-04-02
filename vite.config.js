import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Univerzine2.0/',
  build: {
    outDir: 'dist',
    target: 'esnext',
  },
});
