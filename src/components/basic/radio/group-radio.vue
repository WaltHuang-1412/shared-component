<template lang="pug">
.group-radio(v-bind="$attrs")
  slot
</template>

<script setup lang="ts">
import { defineProps, defineEmits, provide, reactive, toRefs } from 'vue'
import { radioInjectionKey } from './use-group-radio'
import type { IRadioType } from './use-radio'

export interface IProps {
  modelValue: IRadioType
  name: string | number
  disabled?: boolean
  radioBgc?: string
}

const props = defineProps<IProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: IRadioType): void
  (e: 'change', val: IRadioType): void
}>()

const setModelValue = (val: IRadioType) => {
  emit('update:modelValue', val)
  emit('change', val)
}

provide(
  radioInjectionKey,
  reactive({
    ...toRefs(props),
    setModelValue
  })
)
</script>

<style lang="scss"></style>
