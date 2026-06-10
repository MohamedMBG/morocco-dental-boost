import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const buildGtmHead = (gtmId: string) => `    <!-- Google Tag Manager -->
    <script>
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    </script>
    <!-- End Google Tag Manager -->`;

const buildGtmBody = (gtmId: string) => `    <!-- Google Tag Manager (noscript) -->
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->`;

const gtmPlugin = (gtmHead: string, gtmBody: string) => ({
  name: "gtm-html-injector",
  transformIndexHtml(html: string) {
    return html
      .replace("    <!-- GTM_HEAD -->", gtmHead)
      .replace("    <!-- GTM_BODY -->", gtmBody);
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const configuredBase = (env.VITE_BASE_PATH || process.env.VITE_BASE_PATH || "").trim() || "/";
  const normalizedBase = configuredBase === "/" ? "/" : `/${configuredBase.replace(/^\/+|\/+$/g, "")}/`;
  const gtmId = (env.VITE_GTM_ID || process.env.VITE_GTM_ID || "").trim();
  const gtmHead = gtmId ? buildGtmHead(gtmId) : "";
  const gtmBody = gtmId ? buildGtmBody(gtmId) : "";

  return {
    base: normalizedBase,
    server: {
      host: "127.0.0.1",
      port: 8081,
      strictPort: false,
      hmr: {
        overlay: true,
      },
    },
    plugins: [react(), gtmPlugin(gtmHead, gtmBody), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    build: {
      // Inline small assets (<= 8KB) as base64 to eliminate extra HTTP requests
      assetsInlineLimit: 8192,
      // CSS code splitting: only load CSS needed for the current page
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
  };
});
