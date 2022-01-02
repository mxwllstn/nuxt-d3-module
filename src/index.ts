import { Module } from '@nuxt/types'
import path from 'path'

declare global {
  interface Console {
    warning: (payload: any) => void
    fatal: (payload: any) => void
  }
}

export default <Module>function () {
  const { nuxt } = this

  try {
    /* add build standalone options */
    nuxt.options.build.standalone = true

    /* add d3 plugin that injects as this.$d3 */
    this.addPlugin({
      src: path.resolve(__dirname, 'plugin.js'),
      fileName: 'd3.js'
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.fatal(error)
  }
}