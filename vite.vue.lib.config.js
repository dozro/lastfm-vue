import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'angus_lastfm',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `angus_lastfm.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
});
