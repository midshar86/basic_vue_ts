<template>
  <div>count: {{ countStore.count }}</div>
  <div><button @click="changeCount">点击更改count</button></div>
  <div>展示插件信息: {{ countStore.constObj }}</div>
</template>

<script setup>
import useCountStore from '@/stores/countStore'
const countStore = useCountStore()
const changeCount = () => {
  countStore.changeCount(5)
}
console.log(countStore)
</script>

<style lang="scss" scoped></style>
