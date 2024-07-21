<template>
  <div>子组件</div>
  <div>
    <p><button @click="isShow = !isShow">Click</button></p>
    <p v-show="isShow">MSG</p>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'
const isShow = ref(true)

console.log('这是第一个生命周期setup')
onBeforeMount(() => {
  console.log('这是第二个生命周期onBeforeMount')
})
onMounted(() => {
  console.log('这是第三个生命周期onMounted')
})
onMounted(() => {
  console.log('再次使用onMounted生命周期')
})
onBeforeUpdate(() => {
  console.log('这是第四个生命周期onBeforeUpdate')
})
onUpdated(() => {
  console.log('这是第五个生命周期onUpdated')
})
onBeforeUnmount(() => {
  console.log('这是第六个生命周期onBeforeUnmount')
})
onUnmounted(() => {
  console.log('这是第七个生命周期onUnmounted')
})
</script>

<style lang="scss" scoped></style>
