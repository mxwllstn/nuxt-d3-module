import * as d3 from 'd3'
import { Context } from '@nuxt/types'

export default (_ctx: Context, inject: any): void => {
  inject('d3', d3)
}