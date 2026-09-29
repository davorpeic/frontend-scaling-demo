import { defineConfig } from 'vite-plus';

export default defineConfig({
  lint: {
    ignorePatterns: [
      '**/.next/**',
      '**/dist/**',
      '**/storybook-static/**',
      '**/node_modules/**',
    ],
  },
  fmt: {
    ignorePatterns: ['**/.next/**', '**/dist/**', '**/storybook-static/**'],
  },
  test: {
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: ['**/node_modules/**', '**/.next/**', '**/dist/**'],
  },
});
