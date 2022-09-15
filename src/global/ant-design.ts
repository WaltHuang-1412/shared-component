import { App } from 'vue'
import DatePicker from 'ant-design-vue/es/date-picker/moment'
import TimePicker from 'ant-design-vue/es/time-picker/moment'
import Calendar from 'ant-design-vue/es/calendar/moment'
import 'ant-design-vue/lib/date-picker/style/css'

export function registerAntDesign(app: App<Element>) {
  app.use(DatePicker)
  app.use(TimePicker)
  app.use(Calendar)
}
