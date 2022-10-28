<template lang="pug">
el-option(v-bind="$attrs")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCOption',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
