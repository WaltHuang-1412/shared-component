import BOCSelect from './index.vue'
import BOCOption from '../BOCOption/index.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Common/BOCSelect',
  component: BOCSelect,
  argTypes: {
    multiple: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    disabled: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    ['collapse-tags']: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    ['collapse-tags-tooltip']: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    placeholder: {
      control: 'text',
      defaultValue: { summary: false }
    }
  },
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: '#2b2b35' },
        { name: 'light', value: '#fff' }
      ]
    }
  }
} as Meta<InstanceType<typeof BOCSelect>>

interface IArgs {
  multiple: boolean
  disabled: boolean
  ['collapse-tags']: false
  ['collapse-tags-tooltip']: false
  placeholder: string
}

export const Default: StoryFn<IArgs> = (args) => {
  const selectValue = ref('')
  const options = [
    {
      value: 'Option1',
      label: 'Option1'
    },
    {
      value: 'Option2',
      label: 'Option2'
    },
    {
      value: 'Option3',
      label: 'Option3'
    },
    {
      value: 'Option4',
      label: 'Option4'
    },
    {
      value: 'Option5',
      label: 'Option5'
    }
  ]

  return {
    render() {
      return (
        <BOCSelect v-model={selectValue.value} {...args}>
          {options.map((item) => {
            const args = Object.assign(
              {},
              {
                key: item.value,
                value: item.value,
                label: item.label
              }
            )
            return <BOCOption {...args} />
          })}
        </BOCSelect>
      )
    }
  }
}

Default.args = {
  multiple: false,
  disabled: false,
  ['collapse-tags']: false,
  ['collapse-tags-tooltip']: false,
  placeholder: ''
}
