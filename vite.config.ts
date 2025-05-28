
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    dts({
      include: ['./lib/**/*', 'types.d.ts'],
    }),
    react(),
    viteStaticCopy({
      targets: [
        // { src: './README.md', dest: './' },
        // { src: './src/assets/style/theme.css', dest: './' },
      ],
    }),
  ],
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: './lib/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client', 'react-dom/server', 'react/jsx-runtime'],
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})
