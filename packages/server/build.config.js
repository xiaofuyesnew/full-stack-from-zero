import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./src/index.js'],
  outDir: 'build',
})