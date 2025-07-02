import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import UnoCSS from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
   server: { port: 5174 },
   plugins: [preact(), UnoCSS()],
})
