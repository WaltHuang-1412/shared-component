import { InjectionKey, Ref } from 'vue'
import type { IRadioType } from './use-radio'

interface IProps {
  modelValue: IRadioType
  name: string | number
  disabled: boolean
}

interface IInjectionKey extends IProps {
  setModelValue: (val: IRadioType) => void
}

export const radioInjectionKey: InjectionKey<IInjectionKey> = Symbol('radio')

export default function useGroupRadio(
  props: IProps,
  emit: {
    (e: 'update:modelValue', val: IRadioType): void
    (e: 'change', val: IRadioType): void
  }
) {
  const setModelValue = (val: IRadioType) => {
    emit('update:modelValue', val)
    emit('change', val)
  }

  return {
    setModelValue,
    ...props
  }
}
