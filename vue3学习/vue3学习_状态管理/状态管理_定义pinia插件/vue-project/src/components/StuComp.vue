<template>
  <div>name: {{ stuStore.name }}</div>
  <div>age: {{ stuStore.age }}</div>
  <div>gender: {{ stuStore.gender }}</div>
  <div>描述学生信息: {{ stuStore.showStuInfo }}</div>
  <div><button @click="changeStuInfo">点击更改学生信息</button></div>
  <div>展示插件信息: {{ stuStore.constObj }}</div>
</template>

<script setup>
import useStuStore from '@/stores/stuinfoStore'
const stuStore = useStuStore()
const changeStuInfo = () => {
  stuStore.changeStuInfo()
}
</script>

<style lang="scss" scoped></style>
