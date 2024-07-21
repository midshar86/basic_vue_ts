<template>
  <div>count: {{ countStore.count }}</div>
  <p><button @click="changeCount">点击按钮改变count</button></p>
</template>

<script setup>
import useCountStore from '@/stores/counter'
const countStore = useCountStore()
const changeCount = () => {
  countStore.changeCount(5)
}
</script>

<style lang="scss" scoped></style>
