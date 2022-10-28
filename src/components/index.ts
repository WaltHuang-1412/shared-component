import { App } from 'vue'

import BOCButton from './common/BOCButton/index.vue'
import BOCDatePicker from './common/BOCDatePicker/index.vue'
import BOCInput from './common/BOCInput/index.vue'
import BOCOption from './common/BOCOption/index.vue'
import BOCRadio from './common/BOCRadio/index.vue'
import BOCRadioGroup from './common/BOCRadioGroup/index.vue'
import BOCSelect from './common/BOCSelect/index.vue'
import BOCTable from './common/BOCTableColumn/index.vue'
import BOCTableColumn from './common/BOCTableColumn/index.vue'
import BOCTabPane from './common/BOCTabPane/index.vue'
import BOCTabs from './common/BOCTabs/index.vue'

const BOComponents = [
  BOCButton,
  BOCDatePicker,
  BOCInput,
  BOCOption,
  BOCRadio,
  BOCRadioGroup,
  BOCSelect,
  BOCTable,
  BOCTableColumn,
  BOCTabPane,
  BOCTabs
]

export default {
  install: (app: App) => {
    for (const BOComponent of BOComponents) {
      app.component(BOComponent.name, BOComponent)
    }
  }
}

export {
  BOCButton,
  BOCDatePicker,
  BOCInput,
  BOCOption,
  BOCRadio,
  BOCRadioGroup,
  BOCSelect,
  BOCTable,
  BOCTableColumn,
  BOCTabPane,
  BOCTabs
}
