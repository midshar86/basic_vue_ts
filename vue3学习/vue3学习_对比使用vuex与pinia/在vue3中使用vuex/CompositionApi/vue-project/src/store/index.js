// 在组合式 API 中使用 vuex 定义仓库仍然采用引入 createStore 的方式
import { createStore } from 'vuex'

// 定义一个仓库
const store = createStore({
  state: {
    count: 0
  },
  getters: {
    showCount(state) {
      return `当前显示的count值是：${state.count}`
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

// 导出仓库
export default store