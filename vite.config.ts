import path from 'node:path'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src').replace(/\\/g, '/') },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 1 }), autoprefixer()],
    },
  },
})
