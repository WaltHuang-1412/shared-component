<template lang="pug">
ElRadio.boc-radio(v-bind="$attrs")
  slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCRadio',
  inheritAttrs: false,
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.el-radio.is-checked {
  .el-radio__input.is-checked {
    .el-radio__inner {
      background-color: #f36a69;
      border-color: #f36a69;
    }
  }
}
</style>
