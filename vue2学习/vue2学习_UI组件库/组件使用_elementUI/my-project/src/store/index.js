import storeModules from './modules/merge_modules'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store(storeModules)

export default store
