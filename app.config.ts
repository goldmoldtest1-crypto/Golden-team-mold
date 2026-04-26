import tsConfigPaths from 'vite-tsconfig-paths'

export default {
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
}
