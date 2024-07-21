import { createApp } from 'vue'
import App from './App.vue'
// 导入定义的仓库
// 在 vuex 中定义的仓库文件只有一个
import store from './store'

// 使用 use 语法
createApp(App).use(store).mount('#app')
