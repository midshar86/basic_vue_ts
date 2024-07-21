<template>
  <hr />
  <h3>使用shallowReactive()</h3>
  <div>
    <div>
      <p>name: {{ stuInfo.name }}</p>
      <p>age: {{ stuInfo.age }}</p>
      <p>math: {{ stuInfo.grades.math }}</p>
      <p>physics: {{ stuInfo.grades.physics }}</p>
      <p>
        hobbies: <span v-for="item in stuInfo.hobbies" :key="item">{{ item }}</span>
      </p>
    </div>
    <div>
      <p><button @click="stuInfo.name = 'midshar'">点击更换name</button></p>
      <p><button @click="stuInfo.grades.math = 100">点击更换math</button></p>
      <p><button @click="stuInfo.grades = {}">点击更换整个grades</button></p>
      <p><button @click="stuInfo.hobbies[1] = '⚽'">点击更换hobbies内容</button></p>
    </div>
  </div>
  <hr />
  <h3>使用shallowRef()</h3>
  <div>
    <div>{{ stuInfoRef }}</div>
    <p><button @click="stuInfoRef.name = 'chang'">点击更改name</button></p>
    <p><button @click="stuInfoRef = {}">点击更改shallowRef对象</button></p>
  </div>
</template>

<script setup>
import { shallowReactive, shallowRef } from 'vue'

let studentInfo = {
  name: 'Bro',
  age: 18,
  grades: {
    math: 88,
    physics: 76
  },
  hobbies: ['🏊‍', '🏓', '🎹']
}
// 使用 shallowReactive() 工具函数
const stuInfo = shallowReactive(studentInfo)

const stuInfoRef = shallowRef(studentInfo)
</script>

<style lang="less" scoped></style>
