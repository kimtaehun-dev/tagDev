import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tagDev/', // GitHub Pages 배포를 위한 루트 경로 설정
  define: {
    'process.env.BUILD_DATE': JSON.stringify(new Date().toISOString())
  }
})
