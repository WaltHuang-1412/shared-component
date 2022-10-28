import BOCOption from './index.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ref } from 'vue'

export default {
  title: 'Common/BOOption',
  component: BOCOption,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        { name: 'default', value: '#2b2b35' },
        { name: 'light', value: '#fff' }
      ]
    }
  }
} as Meta<InstanceType<typeof BOCOption>>

// interface IArgs {}

export const Default: StoryFn<any> = (args) => {
  const optionValue = ref('')

  return {
    render() {
      return <BOCOption v-model={optionValue.value} />
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
