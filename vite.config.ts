// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/jotform-widget/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        simple: resolve(__dirname, "simple/index.html"),
        simplemod: resolve(__dirname, "simplemod/index.html"),
      },
    },
  },
});
