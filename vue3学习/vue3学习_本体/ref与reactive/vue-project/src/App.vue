<script>
import { reactive, ref, toRefs } from 'vue'

export default {
  setup() {
    const studentObj={
      name: 'midshar',
      age: 18,
      gender: 'male',
      grade: {
        English: 88,
        math: 98
      },
      hobbies: ['singing ', 'swimming ']
    }
    const student = reactive(studentObj)
    const singleData=ref('测试单条数据')
    const handlerClick = () => {
      student.name = 'Admin'
      console.log(singleData)
      singleData.value='单条数据修改成功'
    }
    return { student,handlerClick,...toRefs(student) ,singleData}
  }
}
</script>

<template>
  <div>测试单条数据:{{singleData  }}</div>
  <div>
    <p>Name:{{ name }}</p>
    <p>age:{{ age }}</p>
    <p>gender:{{ gender }}</p>
    <p>grade:
      <ul>
        <li>English:{{ grade.English }}</li>
        <li>Math:{{ grade.math }}</li>
      </ul>
    </p>
    <div><div>hobbies:</div><span v-for="item in hobbies" :key="item">{{ item }}</span></div>
  </div>
  <p><button @click="handlerClick">Click</button></p>
</template>

<style scoped></style>
