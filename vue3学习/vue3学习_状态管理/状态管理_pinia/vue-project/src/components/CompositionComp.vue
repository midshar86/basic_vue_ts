<template>
  <h2>组合式API的写法</h2>
  <div>count: {{ count }}</div>
  <div>price: {{ price }}</div>
  <div>totalPrice: {{ totalPrice }}</div>
  <div>computedCount: {{ packingCount }}</div>
  <p><button @click="count += 5">点击count+5</button></p>
  <p><button @click="resetCount">点击重置数据</button></p>
  <p><button @click="changeManyWithObj">点击批量修改数据--对象形式</button></p>
  <p><button @click="changeManyWithFun">点击批量修改数据--函数形式</button></p>
</template>

<script setup>
import useCountStore from '@/store/count'
// 引入 storeToRefs 使数据变成响应式
import { storeToRefs } from 'pinia'
import { watch } from 'vue'
// 引入仓库获取仓库数据
const store = useCountStore()
const { count, price, totalPrice, packingCount } = storeToRefs(store)
// 调用仓库中的 $reset() 方法重置数据
const resetCount = () => {
  store.$reset()
}
// 批量修改数据--使用对象形式
const changeManyWithObj = () => {
  store.$patch({
    count: 50,
    price: 10
  })
}
// 批量修改数据--使用函数形式
const changeManyWithFun = () => {
  store.$patch((state) => {
    state.count = 100
    state.price = 66
  })
}
// 订阅修改, 即使修改前后数据一致也会触发订阅
store.$subscribe((mutations, state) => {
  console.log(mutations)
  console.log(state)
})
// 使用 watch 侦听器, 当重复赋值相同数据时, 不会触发侦听器
watch(store.$state, (newValue, oldValue) => {
  console.log(newValue)
  console.log(oldValue)
})
</script>

<style lang="less" scoped></style>
