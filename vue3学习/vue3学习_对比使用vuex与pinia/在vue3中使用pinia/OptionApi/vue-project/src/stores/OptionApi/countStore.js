// 在 pinia 中, 不存在 mutations
// 使用 defineStore 方法来定义一个 store
import { defineStore } from "pinia";

// 使用组合式 api 的风格编写 store
const useCountStore = defineStore('countStore', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    showCount() {
      return `当前显示的count值为:${this.count}`
    }
  },
  actions: {
    changCount(val) {
      this.count += val
    }
  }
})
export default useCountStore