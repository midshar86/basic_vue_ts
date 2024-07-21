<template>
  <div>{{ res }}</div>
</template>

<script setup>
import { ref } from 'vue'

const res = ref('')
// 创建一个 Promise 对象模拟异步请求
let promiseObj = new Promise((resolve) => {
  setTimeout(() => {
    // 3s之后返回成功
    resolve(console.log('success!'))
  }, 3000)
})
// 成功后修改 res 数据
await promiseObj.then(() => (res.value = 666))
</script>

<style lang="scss" scoped></style>
