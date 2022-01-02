import { resolve } from 'path'
import d3Module from '../src'

export default {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [d3Module]
}
