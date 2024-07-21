<template>
  <p>子组件</p>
  <div>
    <p>username: {{ username }}</p>
    <p>
      <input type="text" :value="username" @input="sendMsg" />
    </p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// 使用 propModifiers 来获取添加的修饰符
const props = defineProps(['username', 'usernameModifiers'])
const emit = defineEmits(['update:username'])

// 每次在输入框输入后, 也转换一次
const sendMsg = (e) => {
  let val = e.target.value
  if (props.usernameModifiers?.toUpperCase) {
    val = val.slice(0, 1).toUpperCase() + val.slice(1)
  }
  // 通知父组件修改属性
  emit('update:username', val)
}
// 在dom元素首次挂载成功时, 转换一次
onMounted(() => {
  let val = props.username
  if (props.usernameModifiers?.toUpperCase) {
    val = val.slice(0, 1).toUpperCase() + val.slice(1)
  }
  emit('update:username', val)
})
</script>

<style lang="scss" scoped></style>
