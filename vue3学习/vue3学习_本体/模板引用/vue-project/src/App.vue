<script setup>
import { ref, onMounted } from 'vue'
import SubComp from './components/SubComp.vue'
// 通过ref获取组件或者dom节点
const sub = ref(null)
const dom = ref(null)
onMounted(() => {
  console.log(sub, dom)
})
</script>

<template>
  <SubComp ref="sub"></SubComp>
  <div ref="dom">根组件</div>
</template>

<style scoped></style>
