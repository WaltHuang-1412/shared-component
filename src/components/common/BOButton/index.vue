<template lang="pug">
el-button#bo-button(v-bind="$attrs" :style="inlineStyle")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOButton',
  inheritAttrs: false,
  setup() {
    const inlineStyle = {
      '--el-button-bg-color': '#0277ff',
      '--el-button-border-color': 'transparent',
      '--el-button-hover-bg-color': '#0277ff',
      '--el-button-active-bg-color': '#0277ff',
      '--el-button-active-border-color': 'transparent'
    }

    return {
      inlineStyle
    }
  }
})
</script>

<style lang="scss">
#bo-button {
  font-size: 14px;
  min-width: 80px;
  border: none;

  &:active {
    box-shadow: inset 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
