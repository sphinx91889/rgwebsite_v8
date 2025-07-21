import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import { seoPlugin } from "./vite-plugin-seo";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seoPlugin({
      baseUrl: 'https://therivieregroup.org',
      outputDir: 'dist'
    })
  ],
  base: "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  // Handle SPA routing
  server: {
    port: 5174,
    host: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Ensure proper asset handling
    assetsInlineLimit: 4096,
  },
  // Ensure proper module resolution
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
