import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// 2. Recreate __dirname safely for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "./src/sass"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filename) => {
          if (filename.includes("src/sass") || filename.includes("src\\sass")) {
            return content;
          }
          return `@use "@sass/abstracts" as *;\n${content}`;
        },
      },
    },
  },
});
