import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  // Handle SPA routing
  server: {
    port: 5174,
    host: true,
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/blog\/.*/, to: '/index.html' },
        { from: /^\/.*/, to: '/index.html' }
      ]
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
