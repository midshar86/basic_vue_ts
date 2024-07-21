import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
const mitter = mitt()

const app = createApp(App)
// 创建一个根实例, 并将其挂载到 #app
console.log(app)
// 在根实例上挂载全局属性
app.config.globalProperties.$bus = mitter

app.mount('#app')
