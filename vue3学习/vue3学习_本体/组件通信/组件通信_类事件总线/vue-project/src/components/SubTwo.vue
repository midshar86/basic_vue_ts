<template>
  <div>兄弟组件2</div>
  <p>{{ msg }}</p>
  <p><button @click="sendMsg">点击向兄弟组件1表示祝贺</button></p>
</template>

<script setup>
import { ref } from 'vue'
// 获取当前组件实例
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const msg = ref('兄弟组件2的数据')
const sendMsg = () => {
  proxy.$bus.emit('changeMsg', '兄弟组件2夸你666')
}
</script>

<style lang="scss" scoped></style>
