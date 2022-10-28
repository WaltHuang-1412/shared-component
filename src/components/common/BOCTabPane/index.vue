<template lang="pug">
el-tab-pane.boc-tab-pane(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCTabPane',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
