<template>
  <div class="basic-input" :data-is-full="isFull" :data-is-round="isRound">
    <div class="basic-input__prefix" v-if="$slots.prefix">
      <slot name="prefix" />
    </div>
    <div class="basic-input__content">
      <input v-model="bindValue" v-bind="$attrs" />
    </div>
    <div class="basic-input__suffix" v-if="$slots.suffix">
      <slot name="suffix" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  name: 'BasicInput',
  inheritAttrs: false,
  components: {},
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    isRound: { type: Boolean, default: false },
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
    return { bindValue }
  }
})
</script>

<style lang="scss">
.basic-input {
  display: flex;
  border: 1px solid black;
  width: 200px;
  height: 30px;
  justify-content: center;
  align-items: center;

  &[data-is-full='true'] {
    width: 100%;
  }

  &[data-is-round='true'] {
    border-radius: 30px;
  }
  &__content {
    width: 100%;
    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: none;
      outline: none;
    }
  }

  &__prefix {
  }
  &__suffix {
  }
}
</style>
