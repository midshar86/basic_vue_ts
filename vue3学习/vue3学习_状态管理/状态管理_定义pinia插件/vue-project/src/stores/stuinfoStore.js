import { defineStore } from "pinia";
const useStuStore = defineStore('stuInfo', {
  state: () => {
    return {
      name: 'midshar',
      age: 18,
      gender: 'male'
    }
  },
  getters: {
    showStuInfo() {
      return `Student's name is ${this.name}, and student's age is ${this.age}, and ${this.gender === 'male' ? 'he' : 'she'} is a ${this.gender} person.`
    }
  },
  actions: {
    changeStuInfo() {
      this.name = 'Tom'
      this.age += 1
      this.gender = 'female'
    }
  }
})
export default useStuStore