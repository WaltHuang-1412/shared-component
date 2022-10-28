import BOCButton from './index.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Common/BOCButton',
  component: BOCButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      defaultValue: { summary: 'primary' }
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small'],
      defaultValue: { summary: 'default' }
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    label: {
      control: 'text',
      defaultValue: { summary: 'Button' }
    },
    onclick: { action: 'clicked' },
    plain: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    link: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    round: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    circle: {
      control: 'boolean',
      defaultValue: { summary: false }
    }
  }
} as Meta<InstanceType<typeof BOCButton>>

interface IArgs {
  label: string
  type: string
  onClick: () => void
  disabled: boolean
  loading: boolean
  plain: boolean
}

export const Default: StoryFn<IArgs | any> = (args) => {
  const { label, ...elseArgs } = args
  const isLoading = ref(false)

  const handleLoading = () => {
    isLoading.value = !isLoading.value
    if (isLoading.value) {
      setTimeout(() => {
        isLoading.value = false
      }, 3000)
    }
  }

  return {
    render() {
      return (
        <BOCButton
          {...elseArgs}
          onClick={handleLoading}
          loading={isLoading.value}
        >
          {label}
        </BOCButton>
      )
    }
  }
}
Default.args = {
  disabled: false,
  plain: false,
  link: false,
  round: false,
  circle: false,
  label: 'Button',
  size: 'default',
  type: 'primary'
}
