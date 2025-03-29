import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  publicDir: 'public',
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  server: {
    watch: {
      usePolling: true
    }
  }
});
