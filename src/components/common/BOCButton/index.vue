<template lang="pug">
.boc-button
  el-button(v-bind="$attrs" :data-type="dataType")
    slot
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BOCButton',
  inheritAttrs: false,
  props: {
    dataType: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.boc-button {
  display: inline-block;

  .el-button {
    font-size: 14px;
    min-width: 80px;
    border: 0 solid transparent;
    background-color: #0277ff;
    color: #fff;

    &:active,
    &:focus,
    &:hover {
      background-color: #0277ff;
      border-color: transparent;
      color: #fff;
    }

    &:active {
      box-shadow: inset 1px 2px 8px 0 rgba(0, 0, 0, 0.2);
    }

    &:focus-visible {
      outline: none;
    }

    &[data-type='outline-fade'] {
      border: 1px solid #fff;
      background-color: transparent;
      color: #fff;
      transition: opacity 0.3s ease-in-out 0s;
      &:hover,
      &:focus {
        background-color: transparent;
        color: #fff;
        border-color: #fff;
      }
      &:hover {
        opacity: 0.61;
      }
    }
    &[data-type='outline-fade'].is-disabled {
      opacity: 0.3;
      font-weight: 400;

      &:hover {
        color: #fff;
        background-color: unset;
      }
    }
  }
}
</style>
