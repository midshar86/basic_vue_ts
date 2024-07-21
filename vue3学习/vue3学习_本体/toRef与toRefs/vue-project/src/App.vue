<script>
import { reactive, toRef, toRefs } from 'vue'

export default {
  setup() {
    let student = reactive({
      name: 'midshar',
      age: 18,
      gender: 'male'
    })
    let person = reactive({
      xingming: '王五',
      address: '四川',
      age: 20
    })
    // 转换单条数据
    const name = toRef(student, 'name')
    // 转换多条数据
    const changeName = function () {
      name.value = '张三'
      person.xingming = '李四'
      person.address = '陕西'
      person.age = 88
    }
    return { name, changeName, ...toRefs(person) }
  }
}
</script>

<template>
  <div>
    <p>name:{{ name }}</p>
    <hr />
    <p>xingming:{{ xingming }}</p>
    <p>address:{{ address }}</p>
    <p>age:{{ age }}</p>
    <p><button @click="changeName">Click</button></p>
  </div>
</template>

<style scoped></style>
