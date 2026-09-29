import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite-plus';

export default defineConfig(({ command }) => ({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'account-mfe',
        },
      },
    }),
  ],
  define:
    command === 'build'
      ? { 'process.env.NODE_ENV': JSON.stringify('production') }
      : undefined,
  build:
    command === 'build'
      ? {
          lib: {
            entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
            name: 'AccountMfe',
            formats: ['es'],
            fileName: () => 'account-mfe.js',
          },
          rollupOptions: {
            external: [],
          },
          emptyOutDir: true,
        }
      : undefined,
}));
