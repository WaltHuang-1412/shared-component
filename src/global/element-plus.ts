import { App } from 'vue'
import {
  ElTabs,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElButton,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElOption
} from 'element-plus'

const elementComponents = [
  ElTabs,
  ElTabPane,
  ElTable,
  ElTableColumn,
  ElButton,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElOption
]

export function registerElementPlus(app: App<Element>) {
  for (const elementComponent of elementComponents) {
    app.component(elementComponent.name, elementComponent)
  }
}
