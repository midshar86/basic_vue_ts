import { defineStore } from 'pinia'
// 使用组合式的风格定义 store
const useCountStore = defineStore('countPart', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    showInfo() {
      return `当前显示的计数器值是 ${this.count}.`
    }
  },
  actions: {
    changeCount(val) {
      this.count += val
    }
  }
})
export default useCountStore