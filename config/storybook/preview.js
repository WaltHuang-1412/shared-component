import { app } from '@storybook/vue3'
import ElementPlus from 'element-plus'
import DatePicker from 'ant-design-vue/es/date-picker/moment'
import TimePicker from 'ant-design-vue/es/time-picker/moment'
import Calendar from 'ant-design-vue/es/calendar/moment'
import 'element-plus/dist/index.css'
import 'ant-design-vue/lib/date-picker/style/css'
app.use(ElementPlus)
app.use(DatePicker)
app.use(TimePicker)
app.use(Calendar)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
