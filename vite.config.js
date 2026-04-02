import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Univerzine2.0/',
  build: {
    outDir: 'dist',
    target: 'es2020',         // broader browser compat than esnext
    minify: 'esbuild',        // fast, built-in minifier
    rollupOptions: {
      output: {
        manualChunks: undefined,  // single bundle — fewer requests
      },
    },
    assetsInlineLimit: 8192,    // inline small assets as data URIs
    sourcemap: false,           // smaller deploy
  },
});
