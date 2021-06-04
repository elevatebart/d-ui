import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import svgPlugin from 'vite-plugin-svg'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS(), svgPlugin()],
})
