import BOInput from './index.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { Search } from '@element-plus/icons-vue'

export default {
  title: 'Common/Input',
  component: BOInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'textarea'],
      defaultValue: { summary: 'text' }
    },
    placeholder: {
      control: 'text',
      defaultValue: { summary: '' }
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    clearable: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    showPassword: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    suffixIcon: {
      control: 'boolean',
      defaultValue: { summary: false }
    }
  }
} as Meta<InstanceType<typeof BOInput>>

interface IArgs {
  type: string
  placeholder: string
  disabled: boolean
  clearable: boolean
  showPassword: boolean
  suffixIcon: boolean
}

export const Default: StoryFn<IArgs> = (args) => {
  const { suffixIcon, ...elseArgs } = args
  const inputVModel = ref('')

  return {
    render() {
      return (
        <BOInput
          {...elseArgs}
          v-model={inputVModel.value}
          suffix-icon={suffixIcon ? Search : null}
        />
      )
    }
  }
}
Default.args = {
  type: 'text',
  placeholder: '',
  disabled: false,
  clearable: false,
  showPassword: false,
  suffixIcon: false
}
