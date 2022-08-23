import { App } from 'vue'

const requireComponents = require.context(
  // The relative path of the components folder
  '@/components/common',
  // Whether or not to look in sub folders
  true,
  // The regular expression used to match base component filenames
  /[A-Z|a-z]\w+\.(vue|js|ts)$/
)

export default {
  install: (app: App) => {
    requireComponents.keys().forEach((file) => {
      const component = requireComponents(file).default
      app.component(component.name, component)
    })
  }
}
