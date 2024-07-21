import { createApp } from 'vue'
import App from './App.vue'
// 在 main.js 中挂载仓库
import store from '@/store'

createApp(App).use(store).mount('#app')
