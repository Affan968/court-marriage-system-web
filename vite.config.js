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
    terserOptions: {
      compress: {
        drop_console: true, // Live site se console.logs khatam kar dega (Speed barhay ga)
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Fix for "Unused JavaScript" - Ye libraries ko alag alag files mein baant dega
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Framer Motion aur Lucide Icons ko alag chunk mein dalna speed ke liye behtar hai
            if (id.includes('framer-motion')) return 'animations';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor'; // Baki libraries alag file mein
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})