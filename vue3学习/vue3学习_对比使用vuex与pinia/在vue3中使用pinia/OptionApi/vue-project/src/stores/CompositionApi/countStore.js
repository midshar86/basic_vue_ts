// 使用组合式Api的风格定义store
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useCountStoreComp = defineStore('countStoreComp', () => {
  // 使用ref定义的响应式数据相当于state
  const count = ref(0)
  // 使用computed定义的数据相当于getter
  const showCount = computed(() => {
    return `正在显示count的数值为:${count.value}`
  })
  // 函数相当于actions
  const changeCount = (val) => {
    count.value += val
  }
  return { count, showCount, changeCount }
})

export default useCountStoreComp