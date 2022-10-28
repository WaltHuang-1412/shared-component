<template lang="pug">
.group-radio
  slot
</template>

<script setup lang="ts">
import {
  defineComponent,
  defineProps,
  withDefaults,
  defineEmits,
  provide
} from 'vue'
import { radioInjectionKey } from './use-group-radio'
import useGroupRadio from './use-group-radio'
import type { IRadioType } from './use-radio'

defineComponent({
  name: 'RadioGroup',
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    modelValue: IRadioType
    name: string | number
    disabled?: boolean
  }>(),
  {
    modelValue: '',
    disabled: false
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', val: IRadioType): void
  (e: 'change', val: IRadioType): void
}>()

const groupRadio = useGroupRadio(props, emit)
provide(radioInjectionKey, groupRadio)
</script>

<style lang="scss"></style>
