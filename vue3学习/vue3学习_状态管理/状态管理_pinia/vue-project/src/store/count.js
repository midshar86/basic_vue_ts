import { defineStore } from 'pinia'
// 使用选项对象的方式定义
const useCountStore = defineStore('countStore', {
  state() {
    return {
      count: 0,
      name: 'apple',
      price: 68
    }
  },
  actions: {
    addCount() {
      this.count++
    }
  },
  getters: {
    packingCount(state) {
      return '$' + state.count
    },
    totalPrice(state) {
      return state.count * state.price
    }
  }
})

export default useCountStore