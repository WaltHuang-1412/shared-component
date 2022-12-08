import BasicInput from './index.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Basic/input',
  component: BasicInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text'],
      defaultValue: { summary: 'text' }
    },
    placeholder: {
      control: 'text',
      defaultValue: { summary: '' }
    },
    isRound: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    isFull: {
      control: 'boolean',
      defaultValue: { summary: false }
    }
  }
} as Meta<InstanceType<typeof BasicInput>>

interface IProps {
  type: string
  placeholder: string
  isRound: boolean
  isFull: boolean
}

export const Default: StoryFn<IProps> = (props) => {
  const { ...resetProps } = props
  const inputVModel = ref('')

  return {
    render() {
      return (
        <BasicInput
          v-model={inputVModel.value}
          v-slots={{
            prefix: 1,
            suffix: 4
          }}
          {...resetProps}
        ></BasicInput>
      )
    }
  }
}
Default.args = {
  type: 'text',
  placeholder: '',
  isRound: false,
  isFull: false
}
