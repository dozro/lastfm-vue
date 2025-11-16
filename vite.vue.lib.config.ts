import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "node:path";

// Adjust this to your actual entry file for the Vue library:
const entry = path.resolve(__dirname, "src/components/index.ts");

export default defineConfig({
  plugins: [
    vue(),

    // Generates type declarations automatically into dist/vue/
    dts({
      entryRoot: "src/components",
      outDir: "dist/vue",
      tsconfigPath: "./tsconfig.json",
    }),
  ],

  build: {
    lib: {
      entry,
      name: "AngusLastfm",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        switch (format) {
          case "es":
            return "angus_lastfm.esm.js";
          case "cjs":
            return "angus_lastfm.cjs";
          case "umd":
            return "angus_lastfm.umd.js";
        }
      },
    },

    outDir: "dist/vue",

    rollupOptions: {
      // Do not bundle Vue — required for all Vue libraries.
      external: ["vue"],

      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
