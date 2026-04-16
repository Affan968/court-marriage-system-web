import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  // Ye hissa add karen Legacy JS aur polyfills khatam karne ke liye
  build: {
    target: 'esnext', // Ya 'es2022' use karen modern browsers ke liye
    minify: 'terser', // Behtreen minification ke liye
  }
})