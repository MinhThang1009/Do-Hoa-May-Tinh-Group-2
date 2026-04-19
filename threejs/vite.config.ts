import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          vendor: ["react", "react-dom", "react-router-dom", "framer-motion", "lucide-react", "howler", "lenis"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});

