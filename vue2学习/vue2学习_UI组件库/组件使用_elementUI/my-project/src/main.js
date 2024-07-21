import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入基本样式
import '@/assets/base.css'
// 引入elementUI
import '@/plugin/elementUI'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
