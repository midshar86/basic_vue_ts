import { createApp } from 'vue'
// 在 main.js 中引入并创建 pinia 实例
import { createPinia } from 'pinia'
import App from './App.vue'

// 创建 pinia 实例
const pinia = createPinia()
const app = createApp(App)

// 挂载 pinia 实例
app.use(pinia)
app.mount('#app')
