import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      // 옵션이 필요하다면 여기에 추가할 수 있다.
      // 예: svgr({ svgrOptions: { icon: true } })
    })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    port: 3000
  }
})
