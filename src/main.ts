import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import { registerGlobalApp } from '@/global'

createApp(App).use(registerGlobalApp).use(store).use(router).mount('#app')
