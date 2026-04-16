import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: false,
    hmr: {
      overlay: true,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    // Inline small assets (<= 8KB) as base64 to eliminate extra HTTP requests
    assetsInlineLimit: 8192,
    // CSS code splitting — only load CSS needed for the current page
    cssCodeSplit: true,
    // Fast esbuild minification
    minify: "esbuild",
    // No sourcemaps in production for smaller output
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split heavy vendor libs so they can be cached + loaded in parallel
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
  },
}));
