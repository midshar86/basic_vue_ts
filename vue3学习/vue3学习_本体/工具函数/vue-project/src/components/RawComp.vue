<template>
  <h3>使用toRaw()</h3>
  <p>{{ fruitType }}</p>
  <p><button @click="fruitType.name = 'mango'">点击切换name</button></p>
  <hr />
  <h3>使用markRaw()</h3>
  <p></p>
</template>

<script setup>
import { markRaw, onMounted, reactive, toRaw } from 'vue'
const fruitType = reactive({
  name: 'apple',
  price: 50,
  color: ['yellow', 'red', 'orange']
})
onMounted(() => {
  console.log(fruitType)
})
// 返回一个原始对象
const rawFruitType = toRaw(fruitType)
onMounted(() => {
  console.log(rawFruitType)
})

let originObj = {
  prop: 'one',
  attr: 'two'
}
// 使用markRaw标记后将不会再次转换成响应式对象
markRaw(originObj)
// 仍然是一个原始对象
const reOriginObj = reactive(originObj)
onMounted(() => {
  console.log(reOriginObj)
})
</script>

<style lang="scss" scoped></style>
