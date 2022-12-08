<template lang="pug">
.group-radio(v-bind="$attrs")
  slot
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits, provide } from 'vue'
import { radioInjectionKey } from './use-group-radio'
import useGroupRadio from './use-group-radio'
import type { IRadioType } from './use-radio'

export interface IProps {
  modelValue: IRadioType
  name: string | number
  disabled?: boolean
  radioBgc?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  name: '',
  disabled: false,
  radioBgc: '#409eff'
})

const emit = defineEmits<{
  (e: 'update:modelValue', val: IRadioType): void
  (e: 'change', val: IRadioType): void
}>()

const groupRadio = useGroupRadio(props, emit)
provide(radioInjectionKey, groupRadio)
</script>

<style lang="scss"></style>
