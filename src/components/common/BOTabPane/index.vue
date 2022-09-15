<template lang="pug">
el-tab-pane.bo-tab-pane(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOTabPane',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss"></style>
