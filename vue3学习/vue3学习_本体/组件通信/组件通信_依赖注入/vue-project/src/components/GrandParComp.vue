<template>
  <div>曾父组件</div>
  <p>{{ info }}</p>
  <hr />
  <ParComp></ParComp>
</template>

<script setup>
import { provide, ref } from 'vue'
import ParComp from './ParComp.vue'
const info = ref(6666)
const changeInfo = (num) => {
  info.value += num
}
// 曾父组件提供数据与更改数据的方法
provide('info', info)
provide('changeInfo', changeInfo)
</script>

<style lang="scss" scoped></style>
