import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve : {
//     alias : {
//       '@' : path.resolve(__dirname, './src'),
//       '@res': path.resolve(__dirname, './src/resources'),
//     }
//   }
// })
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@res': path.resolve(__dirname, './src/resources'),
      }
    }
  }

  if (command !== 'serve') {
    config.base = '/react-diw-tarea06/'
  }

  return config
})
