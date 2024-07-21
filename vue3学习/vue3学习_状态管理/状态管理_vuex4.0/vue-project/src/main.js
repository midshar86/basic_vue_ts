import { createApp } from 'vue'
import App from './App.vue'
// import storeOPAPI from '@/store/OptionAPIIndex.js'
import storeCOAPI from '@/store/CompositionAPIIndex'

createApp(App).use(storeCOAPI).mount('#app')
