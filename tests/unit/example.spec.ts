import { shallowMount, mount } from '@vue/test-utils'

import BOCButton from '@/components/common/BOCButton/index.vue'
import BOCRadio from '@/components/common/BOCRadio/index.vue'
import BOCSelect from '@/components/common/BOCSelect/index.vue'
import BOCDatePicker from '@/components/common/BOCDatePicker/index.vue'
import DatePicker from 'ant-design-vue/es/date-picker/moment'

import moment from 'moment'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

// describe('BOCButton.vue', () => {
//   it('test boc-button', () => {
//     const wrapper = shallowMount(BOCButton, {
//       propsData: {
//         dataType: 'outline'
//       }
//     })
//     expect(wrapper.props().dataType).toBe('outline')
//   })
// })

// describe('BOCButton.vue', () => {
//   it('test boc-button', () => {
//     const wrapper = shallowMount(BOCRadio as any, {
//       propsData: {
//         label: 'foo'
//       }
//     })
//     expect(wrapper.props().label).toBe('foo')
//   })
// })

describe('BOCDatePicker.vue', () => {
  it('test datepicker', () => {
    const wrapper = mount(BOCDatePicker, {
      props: {
        modelValue: moment()
      }
    })
    console.log(wrapper)
    // const datepickerComponent = wrapper.getComponent(DatePicker)
    // const foo2 = wrapper.get('placeholder=["Select date"]')
  })
})
