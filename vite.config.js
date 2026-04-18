import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true, // Har page ki CSS alag load hogi, render block kam hoga
    sourcemap: false,   // Production mein sourcemaps ki zaroorat nahi (size kam hoga)
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.info', 'console.debug', 'console.warn'] // In ko bhi nikaal dega
      },
      format: {
        comments: false, // Saare comments khatam (Clean code)
      }
    },
    rollupOptions: {
      output: {
        // Assets ke naam clean rakhega caching ke liye
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // React aur core libraries ko ek main vendor mein rakhein
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-core';
            }
            // Bari libraries ko alag split karein
            if (id.includes('framer-motion')) return 'animations';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})