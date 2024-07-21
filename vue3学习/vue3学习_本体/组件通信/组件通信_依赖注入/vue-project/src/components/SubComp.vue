<template>
  <div>子组件</div>
  <p>{{ info }}</p>
  <p><button @click="changeInfo(5)">点击更改数据</button></p>
</template>

<script setup>
import { inject } from 'vue'

const info = inject('info')
const changeInfo = inject('changeInfo')
console.log(info)
</script>

<style lang="scss" scoped></style>
