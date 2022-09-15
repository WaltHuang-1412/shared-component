<template>
  <div class="basic-input" :data-is-full="isFull">
    <div class="basic-input__prefix" v-if="isPrefix">
      <slot name="prefix"></slot>
    </div>
    <div class="basic-input__content">
      <input v-model="bindValue" v-bind="$attrs" />
    </div>
    <div class="basic-input__suffix" v-if="isSuffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BasicInput',
  inheritAttrs: false,
  components: {},
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    isFull: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const bindValue = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value)
    })
    const isPrefix = computed(() => {
      if (slots['prefix']) {
        return true
      } else {
        return false
      }
    })
    const isSuffix = computed(() => {
      if (slots['suffix']) {
        return true
      } else {
        return false
      }
    })
    return { bindValue, isPrefix, isSuffix }
  }
})
</script>

<style lang="scss">
.basic-input {
  border: 1px solid red;
  display: flex;
  width: 200px;
  height: 30px;

  &[data-is-full='true'] {
    width: 100%;
  }
  &__content {
    width: 100%;
    input {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      box-sizing: border-box;
      outline: none;
    }
  }

  &__prefix {
    border: 1px solid blue;
  }
  &__suffix {
    border: 1px solid green;
  }
}
</style>
