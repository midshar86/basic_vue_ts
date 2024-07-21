import { defineStore } from "pinia";
const useCountStore = defineStore('countStore', {
  state: () => {
    return {
      count: 0
    }
  },
  actions: {
    changeCount(val) {
      this.count += val
    }
  },
  persist: {
    // 设置存储地区
    storage: sessionStorage,
    // 设置 storage 的 key 属性
    key: 'myCount'
  }
})
export default useCountStore