import { h } from 'vue'
import { mount } from '@vue/test-utils'

import Radio from '@/components/basic/radio/radio.vue'

describe('test radio component', () => {
  test('checked should be true', () => {
    const wrapper = mount(Radio, {
      value: 'apple',
      label: 'apple label'
    })
    const radioInput: any = wrapper.find('input[type="radio"]')
    radioInput.setChecked()
    expect(radioInput.element.checked).toBeTruthy()
  })

  test('props modelValue should be success', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'apple',
        label: 'apple label',
        modelValue: '',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e })
      }
    })

    const radioInput = wrapper.find('input')
    await radioInput.trigger('click')
    await radioInput.trigger('change')
    expect(wrapper.props('modelValue')).toBe('apple')
  })

  test('props background color should be success', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'apple',
        label: 'apple label',
        modelValue: '',
        'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e }),
        radioBgc: '#000'
      }
    })

    const radioInput = wrapper.find('input')
    const inner: any = wrapper.find('.hgs-radio-inner')
    await radioInput.trigger('click')
    await radioInput.trigger('change')
    expect(inner.element.style.backgroundColor).toBe('rgb(0, 0, 0)')
  })

  test('click radio', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'apple',
        label: 'apple label'
      }
    })

    const radioInput: any = wrapper.find('input')
    radioInput.setChecked()
    expect(radioInput.element.checked).toBeTruthy()
  })

  test('props label should be success', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'apple',
        label: 'apple label'
      }
    })

    const label = wrapper.find('.hgs-radio-label')
    expect(label.text()).toBe('apple label')
  })

  test('slot should be success', () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'apple',
        label: 'apple label'
      },
      slots: {
        default: h('h1', { class: 'slot-class' }, 'radio label')
      }
    })

    expect(wrapper.find('.slot-class').html()).toBe(
      '<h1 class="slot-class">radio label</h1>'
    )
  })
})
