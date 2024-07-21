<script setup>
import { computed, ref } from 'vue'

let price = ref(255)
let name = ref('张三')
const changePrice = () => {
  price.value++
}

// 简写方式的 computed
const computedPrice = computed(() => {
  return '￥' + price.value
})
// 繁写方式的 computed
const computedName = computed({
  get() {
    return name.value
  },
  set(val) {
    console.log('name值已发生变化:' + val)
  }
})
</script>

<template>
  <div>
    <p>name:{{ price }}</p>
    <p><button @click="changePrice">点击更改价格</button></p>
    <p>计算属性：{{ computedPrice }}</p>
    <hr />
    <p><input type="text" v-model="computedName" /></p>
    <hr />
  </div>
</template>

<style scoped></style>
