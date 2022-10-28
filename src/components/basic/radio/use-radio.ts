import { computed, inject } from 'vue'
import { radioInjectionKey } from './use-group-radio'

interface IProps {
  modelValue?: IRadioType
  value: IRadioType
  label: string | number
  name?: string
  disabled?: boolean
}

interface IEmit {
  (e: 'update:modelValue', value: IRadioType): void
  (e: 'change', value: IRadioType): void
}

export type IRadioType = string | number | boolean

export default function useRadio(props: IProps, emit: IEmit) {
  const radioGroup = inject(radioInjectionKey, undefined)
  const isGroup = computed(() => !!radioGroup)

  const modelValue_ = computed({
    get() {
      return isGroup.value
        ? radioGroup!.modelValue
        : (props.modelValue as IRadioType)
    },
    set(val: IRadioType) {
      isGroup.value
        ? radioGroup!.setModelValue(val)
        : emit('update:modelValue', val)
      emit('change', val)
    }
  })

  return {
    modelValue_,
    radioGroup
  }
}
