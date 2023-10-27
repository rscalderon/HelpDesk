import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/api -> http://localhost:3001/api
      '/api': 'http://localhost:3001/api',
    },
  },
});
