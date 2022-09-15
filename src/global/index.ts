import { App } from 'vue'
import { registerElementPlus } from './element-plus'
import { registerAntDesign } from './ant-design'

export function registerGlobalApp(app: App<Element>) {
  registerElementPlus(app)
  registerAntDesign(app)
}
