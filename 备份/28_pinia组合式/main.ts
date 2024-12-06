// 引入createApp
import {createApp} from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'
const app = createApp(App)
//创建pinia
const pinia = createPinia()
//安装
app.use(pinia)
app.mount('#app')

