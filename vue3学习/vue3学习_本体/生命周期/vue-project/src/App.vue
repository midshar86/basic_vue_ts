<script setup>
import { ref } from 'vue'
import SubComp from './components/SubComp.vue'
const isShow = ref(true)
</script>

<template>
  <p><button @click="isShow = !isShow">点击挂载/销毁子组件</button></p>
  <SubComp v-if="isShow"></SubComp>
</template>

<style scoped></style>
