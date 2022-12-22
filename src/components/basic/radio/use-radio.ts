import { computed, inject, ref } from 'vue'
import { radioInjectionKey } from './use-group-radio'

export interface IProps {
  modelValue?: IRadioType
  value: IRadioType
  label: string | number
  name?: string
  disabled?: boolean
}

export interface IEmit {
  (e: 'update:modelValue', value: IRadioType): void
  (e: 'change', value: IRadioType): void
}

export type IRadioType = string | number | boolean

export default function useRadio(props: IProps, emit: IEmit) {
  const radioGroup = inject(radioInjectionKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const radioRef = ref<HTMLInputElement>()

  const modelValue = computed({
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

      radioRef.value!.checked = val === props.value
    }
  })

  return {
    modelValue,
    radioGroup,
    radioRef
  }
}
