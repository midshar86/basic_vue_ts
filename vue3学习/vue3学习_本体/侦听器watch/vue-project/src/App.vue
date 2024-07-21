<script setup>
import { reactive, ref, watch } from 'vue'

let student = {
  name: 'midsahr',
  age: 18,
  gender: 'male',
  grade: {
    math: 88,
    english: 90
  }
}
let stu = reactive(student)
let stuId = ref('001')
let stuProp = ref('normal')

// 监听 ref 包装的单个数据
watch(stuId, (newValue, oldValue) => {
  console.log('监听ref包装的单个数据：', newValue, oldValue)
})

// 监听 ref 包装的多条数据
watch([stuId, stuProp], (newValue, oldValue) => {
  console.log('监听ref包装的多条数据:', newValue, oldValue)
})

// 监听 reactive 包装的整个对象
watch(
  stu,
  (newValue, oldValue) => {
    console.log(newValue, oldValue)
  },
  {
    // deep: false // 无法关闭深度监听
  }
)

// 监听 reactiv 中的单条简单属性
watch(
  () => stu.name,
  (newValue, oldValue) => {
    console.log('监听对象中的单条简单属性:', newValue, oldValue)
  }
)

// 监听 reactive 中的单条对象属性
watch(
  () => stu.grade,
  (newValue, oldValue) => {
    console.log('监听对象中的某条对象属性:', newValue, oldValue)
  },
  { deep: true } // 开启深度监听
)

// 监听 reactive 中的多条简单属性
watch([() => stu.name, () => stu.age], (newValue, oldValue) => {
  console.log('监听对象中的多条简单属性:', newValue, oldValue)
})

// 监听 reactive 中的混合属性
watch(
  [() => stu.gender, () => stu.grade],
  (newValue, oldValue) => {
    console.log('监听对象中的多条混合属性:', newValue, oldValue)
  },
  {
    deep: true // 混合属性中有对象时需要开启深度监听
  }
)

const changeName = () => {
  stu.name += '**'
}
const changeAge = () => {
  stu.age = 66
}
const changeMath = () => {
  stu.grade.math = 99
}
const changeGender = () => {
  stu.gender = 'female'
}
const changeId = () => {
  stuId.value = '666'
}
const changeProp = () => {
  stuProp.value = 'special'
}
</script>

<template>
  <div>
    <p>id:{{ stuId }}</p>
    <p>prop:{{ stuProp }}</p>
    <p>name:{{ stu.name }}</p>
    <p>age:{{ stu.age }}</p>
    <p>gender:{{ stu.gender }}</p>
    <p>math:{{ stu.grade.math }}</p>
    <p>english:{{ stu.grade.english }}</p>
  </div>
  <hr />
  <div>
    <p>监听reactive</p>
    <p><button @click="changeName">更改name</button></p>
    <p><button @click="changeAge">更改age</button></p>
    <p><button @click="changeGender">更改gender</button></p>
    <p><button @click="changeMath">更改math</button></p>
  </div>
  <hr />
  <div>
    <p>监听ref</p>
    <p><button @click="changeId">更改id</button></p>
    <p><button @click="changeProp">更改prop</button></p>
  </div>
</template>

<style scoped></style>
