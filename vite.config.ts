import { defineConfig } from 'vite'
import { tanstackBuildConfig } from '@tanstack/start/config'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
  ],
})
