import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      {
        find: '@Components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@Pages',
        replacement: resolve(__dirname, './src/pages'),
      },
      {
        find: '@Routes',
        replacement: resolve(__dirname, './src/routes'),
      },
      {
        find: '@Layouts',
        replacement: resolve(__dirname, './src/layouts'),
      },
      {
        find: '@Assets',
        replacement: resolve(__dirname, './src/assets'),
      },
      {
        find: '@Constants',
        replacement: resolve(__dirname, './src/constants'),
      },
      {
        find: '@Context',
        replacement: resolve(__dirname, './src/context'),
      },
      {
        find: '@Types',
        replacement: resolve(__dirname, './src/types'),
      },
      {
        find: '@Reducers',
        replacement: resolve(__dirname, './src/reducers'),
      },
      {
        find: '@Hooks',
        replacement: resolve(__dirname, './src/hooks'),
      },
    ],
  },
})
