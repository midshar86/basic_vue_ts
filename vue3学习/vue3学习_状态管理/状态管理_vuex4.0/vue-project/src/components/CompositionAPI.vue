<template>
  <h2>组合式API中使用vuex</h2>
  <div class="show">
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>gender: {{ gender }}</p>
    <p>introduction: {{ showStuInfo }}</p>
    <p><button @click="changeName('Tom')">点击修改name</button></p>
    <p><button @click="changeAge('28')">点击修改age</button></p>
    <p><button @click="changeGender('female')">点击修改gender</button></p>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
console.log(store)
const name = computed(() => store.state.studentInfo.name)
const age = computed(() => store.state.studentInfo.age)
const gender = computed(() => store.state.studentInfo.gender)
const showStuInfo = computed(() => store.getters.showStuAllInfo)
const changeName = (val) => {
  store.dispatch('changeStuName', val)
}
const changeAge = (val) => {
  store.dispatch('changeStuAge', val)
}
const changeGender = (val) => {
  store.dispatch('changeStuGender', val)
}
</script>

<style lang="less" scoped></style>
