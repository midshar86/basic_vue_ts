import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      studentInfo: {
        name: 'midshar',
        age: 18,
        gender: 'male'
      }
    }
  },
  getters: {
    showStuAllInfo(state) {
      return `The student name is ${state.studentInfo.name}, and ${state.studentInfo.gender === 'male' ? 'he' : 'she'} is ${state.studentInfo.age} years old.`
    }
  },
  actions: {
    changeStuName({ commit }, value) {
      commit('UPDATE_STU_NAME', value)
    },
    changeStuGender({ commit }, value) {
      commit('UPDATE_STU_GENDER', value)
    },
    changeStuAge({ commit }, value) {
      commit('UPDATE_STU_AGE', value)
    }
  },
  mutations: {
    UPDATE_STU_NAME(state, value) {
      state.studentInfo.name = value
    },
    UPDATE_STU_GENDER(state, value) {
      state.studentInfo.gender = value
    },
    UPDATE_STU_AGE(state, value) {
      state.studentInfo.age = value
    }
  }
})

export default store