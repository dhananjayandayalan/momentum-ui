import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@momentum-ui/core-css/styles.css": new URL(
        "../../packages/core-css/src/styles.css",
        import.meta.url
      ).pathname
    }
  },
  plugins: [react()]
});
