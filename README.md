# nuxt-d3-module
[![Version](https://img.shields.io/npm/v/nuxt-d3-module.svg)](https://www.npmjs.org/package/nuxt-d3-module)

Nuxt module that adds required **D3** build options and injects **D3** into `$root` & `context` (accessible with `$this.d3`)

## Install
Use `yarn` to install the module
```bash
yarn add nuxt-d3-module
```
Or use `npm` to install the module
```bash
npm install nuxt-d3-module
```

## Usage
#### nuxt.config.js
```javascript
{
  modules: ['nuxt-d3-module']
}
```

#### index.vue
```vue
<template></template>

<script>
export default {
  mounted() {
    this.$d3.select('body').append('span').text('Hello, world!')
  }
}
</script>
```
