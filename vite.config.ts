import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  build: { sourcemap: true },
  plugins: [
    react(),
    legacy({ targets: ['defaults'] }),
    visualizer({ emitFile: true, gzipSize: true }),
  ],
});
