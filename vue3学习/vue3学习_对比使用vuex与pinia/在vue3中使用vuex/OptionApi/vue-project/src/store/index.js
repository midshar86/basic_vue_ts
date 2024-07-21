// 使用 createStore 来定义 store, 这与 vue2 的 new vuex.Store() 不同
import { createStore } from 'vuex'

// 在 vuex 中定义 state, getters, actions 与 mutations

const store = createStore({
  state: {
    count: 0
  },
  getters: {
    showCount(state) {
      return `当前展示的count值是：${state.count}.`
    }
  },
  actions: {
    changeCount({ commit }, val) {
      commit('CHANGE_COUNT', val)
    }
  },
  mutations: {
    CHANGE_COUNT(state, val) {
      state.count += val
    }
  }
})

// 导出定义的仓库
export default store