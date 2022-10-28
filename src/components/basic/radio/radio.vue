<template lang="pug">
.ms-radio
  .ms-radio-wrapper
    .ms-radio-input
      input(
        type="radio"
        v-model="modelValue_"
        :id="label"
        :value="value"
        :name="radioGroup.name || name"
        :disabled="radioGroup.disabled || disabled"
      )
      .ms-radio-inner(:class="{checked: modelValue_ === value }")
    slot
      label(:for="label") {{ label }}
</template>

<script setup lang="ts">
import { defineComponent, defineProps, withDefaults, defineEmits } from 'vue'
import type { IRadioType } from './use-radio'
import useRadio from './use-radio'

defineComponent({
  name: 'RADIO',
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    modelValue?: IRadioType
    value: IRadioType
    label: string | number
    name?: string
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    disabled: false
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: IRadioType): void
  (e: 'change', value: IRadioType): void
}>()

const { modelValue_, radioGroup } = useRadio(props, emit)
</script>

<style lang="scss">
.ms-radio {
  display: inline-block;

  &-wrapper {
    display: flex;
    align-items: center;
  }

  &-input {
    position: relative;
    display: flex;
    align-items: center;
    /* width: 14px; */

    & > input {
      position: absolute;
      width: 14px;
      height: 14px;
      z-index: 1;
      opacity: 0;
    }
  }

  &-inner {
    position: relative;
    width: 14px;
    height: 14px;
    background-color: green;
    border-radius: 50%;
    border: 1px solid #505050;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 50%;
    }
  }

  .checked {
    background-color: #fff;
  }
}
</style>
