import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { esmExternalRequirePlugin } from "rolldown/plugins";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    esmExternalRequirePlugin({
      external: ["react", "react-dom"],
    }),
  ],

  build: {
    lib: {
      entry: "src/index.js",
      formats: ["es"],
    },
  },
});
