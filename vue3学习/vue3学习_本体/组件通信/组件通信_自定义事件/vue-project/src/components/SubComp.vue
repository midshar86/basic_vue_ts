<template>
  <div>子组件</div>
  <div>
    <p>父组件传递的属性: {{ msg }}</p>
    <p><button @click="handlerClick">点击修改父组件传递的属性</button></p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps(['msg'])
const emit = defineEmits(['changeMsg'])
const handlerClick = () => {
  emit('changeMsg', '子组件已通知父组件修改属性')
}
</script>

<style lang="scss" scoped></style>
