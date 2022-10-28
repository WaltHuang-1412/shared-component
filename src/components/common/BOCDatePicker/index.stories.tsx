import BOCDatePicker from './index.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'
import moment from 'moment'

export default {
  title: 'Common/BOCDatePicker',
  component: BOCDatePicker,
  argTypes: {
    picker: {
      control: 'select',
      options: ['date', 'month', 'week', 'year', 'quarter'],
      defaultValue: { summary: 'month' }
    },
    allowClear: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    showTime: {
      control: 'boolean',
      defaultValue: { summary: false }
    },
    format: {
      control: 'text',
      defaultValue: { summary: 'YYYY/MM/DD' }
    },
    valueFormat: {
      control: 'text',
      defaultValue: { summary: 'YYYY/MM/DD' }
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
} as Meta<InstanceType<typeof BOCDatePicker>>

interface IArgs {
  picker: string
}

export const Default: StoryFn<IArgs | any> = (args) => {
  const datePickerValue = ref(moment().format('YYYY/MM/DD'))

  return {
    render() {
      return <BOCDatePicker {...args} v-model={datePickerValue.value} />
    }
  }
}
Default.args = {
  picker: 'date',
  allowClear: false,
  showTime: false,
  format: 'YYYY/MM/DD',
  valueFormat: 'YYYY/MM/DD'
}
