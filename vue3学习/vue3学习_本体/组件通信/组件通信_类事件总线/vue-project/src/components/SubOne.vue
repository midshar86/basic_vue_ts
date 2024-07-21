<template>
  <div>兄弟组件1</div>
  <p>{{ msg }}</p>
</template>

<script setup>
import { ref } from 'vue'
// 获取当前组件实例
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const msg = ref('兄弟组件1的数据')
// 监听到其他组件的 emit 事件后, 执行相应操作
proxy.$bus.on('changeMsg', (val) => {
  msg.value = val
})
</script>

<style lang="scss" scoped></style>
