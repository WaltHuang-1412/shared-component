import BasicGroupRadio, { IProps } from './group-radio.vue'
import BasicRadio from './radio.vue'
import { ref } from 'vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Basic/GroupRadio',
  component: BasicGroupRadio,
  argTypes: {
    // type: {
    //   control: { type: 'select' },
    //   options: ['text'],
    //   defaultValue: { summary: 'text' }
    // },
    // placeholder: {
    //   control: 'text',
    //   defaultValue: { summary: '' }
    // },
    // isRound: {
    //   control: 'boolean',
    //   defaultValue: { summary: false }
    // },
    // isFull: {
    //   control: 'boolean',
    //   defaultValue: { summary: false }
    // }
    radioBgc: {
      control: 'text',
      defaultValue: { summary: '#409eff' }
    }
  }
} as Meta<InstanceType<typeof BasicGroupRadio>>

const fruitList = [
  {
    value: 'apple',
    label: 'apple'
  },
  {
    value: 'banana',
    label: 'banana'
  },
  {
    value: 'orange',
    label: 'orange'
  }
]

export const Default: StoryFn<IProps> = ({ modelValue, ...elseProps }) => {
  const groupRadioVModel = ref('')

  return {
    render() {
      return (
        <div>
          <BasicGroupRadio v-model={groupRadioVModel.value} {...elseProps}>
            {fruitList.map((item) => (
              <BasicRadio key={item.value} {...item} />
            ))}
          </BasicGroupRadio>
          <h2>foo: {groupRadioVModel.value}</h2>
        </div>
      )
    }
  }
}
Default.args = {
  modelValue: '',
  name: 'fruit',
  disabled: false,
  radioBgc: '#409eff'
}
