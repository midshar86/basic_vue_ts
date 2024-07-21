<template>
  <h1>使用vue3中的watchEffect</h1>
  <div>
    <p>Name:{{ name }}</p>
    <p><button @click="name = 'Tom'">点击更改Name</button></p>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const name = ref('midshar')
// 使用 watchEffect
watchEffect(() => {
  console.log('name发生改变了=>:', name.value)
})
</script>

<style lang="scss" scoped></style>
