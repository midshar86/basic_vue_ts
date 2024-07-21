import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// 在 app 中挂载 pinia 状态管理工具
createApp(App).use(createPinia()).mount('#app')
