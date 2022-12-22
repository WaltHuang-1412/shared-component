import { h } from 'vue'
import { mount } from '@vue/test-utils'

import Input from '@/components/basic/input/index.vue'

describe('test input component', () => {
  test('input text', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: any) =>
          wrapper.setProps({
            modelValue: e
          })
      }
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  test('input should be disabled', async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: '',
        'onUpdate:modelValue': (e: any) =>
          wrapper.setProps({
            modelValue: e
          }),
        disabled: true
      }
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('')
  })

  test('slot should be success', () => {
    const wrapper = mount(Input, {
      slots: {
        prefix: h('div', { class: 'prefix-slot' }, 'prefix'),
        suffix: h('div', { class: 'suffix-slot' }, 'suffix')
      }
    })

    expect(wrapper.find('.prefix-slot').html()).toBe(
      '<div class="prefix-slot">prefix</div>'
    )
    expect(wrapper.find('.suffix-slot').html()).toBe(
      '<div class="suffix-slot">suffix</div>'
    )
  })
})
