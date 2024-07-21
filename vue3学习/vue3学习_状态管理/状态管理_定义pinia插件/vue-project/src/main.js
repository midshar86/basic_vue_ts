import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaPlugin, funPlugin } from './plugin/piniaPlugin'
import App from './App.vue'

const pinia = createPinia()
// 插件效果在全局有效
pinia.use(piniaPlugin)
pinia.use(funPlugin)
const app = createApp(App)

app.use(pinia)
app.mount('#app')
