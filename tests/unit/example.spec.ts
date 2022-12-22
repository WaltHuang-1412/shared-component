import { mount } from '@vue/test-utils'

// import BOCButton from '@/components/common/BOCButton/index.vue'
// import BOCRadio from '@/components/common/BOCRadio/index.vue'
// import BOCSelect from '@/components/common/BOCSelect/index.vue'
// import BOCDatePicker from '@/components/common/BOCDatePicker/index.vue'
// import DatePicker from 'ant-design-vue/es/date-picker/moment'
import Radio from '@/components/basic/radio/radio.vue'
// import Input from '@/components/basic/input/index.vue'

// import moment from 'moment'
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

// describe('BOCDatePicker.vue', () => {
//   it('test datepicker', () => {
//     const wrapper = mount(BOCDatePicker, {
//       props: {
//         modelValue: moment()
//       }
//     })
//     console.log(wrapper)
//     // const datepickerComponent = wrapper.getComponent(DatePicker)
//     // const foo2 = wrapper.get('placeholder=["Select date"]')
//   })
// })

// radio
// describe('test radio component', () => {
//   test('checked should be true', () => {
//     const wrapper = mount(Radio, {
//       value: 'apple',
//       label: 'apple label'
//     })
//     const radioInput: any = wrapper.find('input[type="radio"]')
//     radioInput.setChecked()
//     expect(radioInput.element.checked).toBeTruthy()
//   })

//   test('props v-model should be success', async () => {
//     const wrapper = mount(Radio, {
//       props: {
//         value: 'apple',
//         label: 'apple label',
//         modelValue: '',
//         'onUpdate:modelValue': (e: any) => wrapper.setProps({ modelValue: e })
//       }
//     })

//     const radioInput: any = wrapper.find('input')
//     await radioInput.trigger('click')
//     await radioInput.trigger('change')
//     expect(wrapper.props('modelValue')).toBe('apple')
//   })

//   test('click radio', async () => {
//     const wrapper = mount(Radio, {
//       props: {
//         value: 'apple',
//         label: 'apple label'
//       }
//     })

//     const radioInput: any = wrapper.find('input')
//     radioInput.setChecked()
//     expect(radioInput.element.checked).toBeTruthy()
//   })
// })

// input
// describe('test input component', () => {
//   test('input text', async () => {
//     const wrapper = mount(Input, {
//       props: {
//         modelValue: '',
//         'onUpdate:modelValue': (e: InputEvent) =>
//           wrapper.setProps({
//             modelValue: e
//           })
//       }
//     })

//     await wrapper.find('input').setValue('test')
//     expect(wrapper.props('modelValue')).toBe('test')
//   })

//   test('input should be disabled', async () => {
//     const wrapper = mount(Input, {
//       props: {
//         modelValue: '',
//         'onUpdate:modelValue': (e: InputEvent) =>
//           wrapper.setProps({
//             modelValue: e
//           }),
//         disabled: true
//       }
//     })

//     await wrapper.find('input').setValue('test')
//     expect(wrapper.props('modelValue')).toBe('')
//   })
// })
