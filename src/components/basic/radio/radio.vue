<template lang="pug">
.hgs-radio
  .hgs-radio-wrapper(:disabled="radioGroup?.disabled || disabled")
    .hgs-radio-input
      input(
        ref="radioRef"
        type="radio"
        v-model="modelValue"
        :id="label"
        :value="value"
        :name="radioGroup?.name || name"
        :disabled="radioGroup?.disabled || disabled"
      )
      .hgs-radio-inner(
        :style="`background-color:${innerBgColor(modelValue, value)};`"
        :disabled="radioGroup?.disabled || disabled"
      )
    slot
      label.hgs-radio-label(
        :for="label"
        :disabled="radioGroup?.disabled || disabled"
      ) {{ label }}
  </template>

<script setup lang="ts">
import { defineComponent, defineProps, withDefaults, defineEmits } from 'vue'
import type { IRadioType } from './use-radio'
import useRadio from './use-radio'

defineComponent({
  name: 'HGSRadio',
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    modelValue?: IRadioType
    value: IRadioType
    label: string | number
    name?: string
    disabled?: boolean
    radioBgc?: string
  }>(),
  {
    disabled: false,
    radioBgc: '#409eff'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: IRadioType): void
  (e: 'change', value: IRadioType): void
}>()

const { modelValue, radioRef, radioGroup } = useRadio(props, emit)

const innerBgColor = (modelValue: IRadioType, label: string | number) => {
  if (!radioRef.value?.checked) return '#fff'
  return radioGroup?.radioBgc ? radioGroup.radioBgc : props.radioBgc
}
</script>

<style lang="scss">
.hgs-radio {
  display: inline-block;

  &-wrapper {
    display: flex;
    align-items: center;
  }

  &-input {
    position: relative;
    display: flex;
    align-items: center;

    & > input {
      position: absolute;
      width: 14px;
      height: 14px;
      z-index: 1;
      opacity: 0;
      cursor: pointer;

      &[disabled] {
        cursor: not-allowed;
      }
    }
  }

  &-inner {
    position: relative;
    width: 14px;
    height: 14px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #dcdfe6;

    &[disabled='true'] {
      background-color: #e4e7ed !important;
      border-color: #e4e7ed;

      &::after {
        width: 0px;
        height: 0px;
      }
    }

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
      cursor: pointer;
    }
  }

  &-label {
    color: inherit;
    cursor: pointer;

    &[disabled='true'] {
      color: #a8abb2;
      cursor: not-allowed;
    }
  }

  .checked {
    background-color: #fff;
  }
}
</style>
