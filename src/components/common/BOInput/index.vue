<template lang="pug">
.bo-input
  el-input(v-bind="$attrs" v-model="inputValue")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BOInput',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        emit('update:modelValue', val)
      }
    })

    return {
      inputValue
    }
  }
})
</script>

<style lang="scss">
.bo-input {
  .el-input__inner {
    padding-left: 35px;
    border: 1px solid #fff;
    border-radius: 50px;
    background-color: transparent;
    color: #fff;
    height: 30px;
  }
  .el-input.is-disabled {
    .el-input__inner {
      background-color: inherit;
      border-color: #d4d4d4;
    }
  }
}
</style>
