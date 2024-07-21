<template>
  <div>子组件</div>

  <p><input type="text" :value="msg" @input="handlerInput" /></p>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
defineProps(['msg'])
const emit = defineEmits(['sendMsg'])

const handlerInput = (e) => {
  emit('sendMsg', e.target.value)
}
</script>

<style lang="scss" scoped></style>
