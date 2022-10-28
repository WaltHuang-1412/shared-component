<template lang="pug">
.boc-input
  el-input(
    v-bind="$attrs"
    :prefix-icon="Search"
  )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Search } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'BOCInput',
  inheritAttrs: false,
  setup() {
    return {
      Search
    }
  }
})
</script>

<style lang="scss">
.boc-input {
  .el-input__inner {
    height: 30px;
    border-color: #d4d4d4;
    color: #fff;

    &::placeholder {
      color: #a8abb2;
    }
  }
  .el-input.is-disabled {
    .el-input__wrapper {
      background-color: transparent;
      box-shadow: none;
    }
  }
  .el-input__wrapper {
    border-radius: 50px;
    background-color: transparent;
    box-shadow: none;
    border: 1px solid #fff;
    &.is-focus,
    &:hover {
      box-shadow: none;
    }
  }
}
</style>
