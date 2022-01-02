<template></template>

<script>
export default {
  mounted() {
    this.$d3.select('body').append('span').text('Hello, world!')
  }
}
</script>
