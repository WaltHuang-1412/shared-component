import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import component from './components/index'

createApp(App).use(store).use(router).use(component).mount('#app')
