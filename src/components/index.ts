import { App } from 'vue'

import BOTabs from './common/BOTabs/index.vue'
import BOTable from './common/BOTableColumn/index.vue'
import BOTableColumn from './common/BOTableColumn/index.vue'
import BOInput from './common/BOInput/index.vue'
import BOTabPane from './common/BOTabPane/index.vue'
import BOButton from './common/BOButton/index.vue'
import BODatePicker from './common/BODatePicker/index.vue'

const BOComponents = [
  BOTabs,
  BOTable,
  BOTableColumn,
  BOInput,
  BOTabPane,
  BOButton,
  BODatePicker
]

export default {
  install: (app: App) => {
    for (const BOComponent of BOComponents) {
      app.component(BOComponent.name, BOComponent)
    }
  }
}

export {
  BOTabs,
  BOTable,
  BOTableColumn,
  BOInput,
  BOTabPane,
  BOButton,
  BODatePicker
}
