import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)

const state = {
  userinfo:
  {
    uid: 1,
    username: 'midshar',
    location: '四川省广元市',
    products: ['iPhone', 'TV'],
    totalPrice: 4999
  }

}
const actions = {
  changeUser: (context, value) => {
    // console.log(context)
    context.commit('CHANGEUSER', value)
  }
}
const mutations = {
  CHANGEUSER: (state, value) => {
    // console.log(state)
    state.userinfo.username = value
  },
  CHANGEPRODUCTS: (state, value) => {
    state.userinfo.products = value
  }
}
const getters = {
  showPrice: (state) => {
    return '￥' + state.userinfo.totalPrice + '元'
  }
}
const modules = {
  addModule: {
    // 开启命名空间
    namespaced: true,
    state: {
      count: 0
    },
    actions: {
      addCount: (context, value) => {
        context.commit('ADDCOUNT', value)
      }
    },
    mutations: {
      ADDCOUNT: (state, value) => {
        state.count += value
      }
    },
    getters: {
      showAddNum: (state) => {
        return `当前显示的加运算后的数字是${state.count}.`
      }
    }
  },
  subModule: {
    // 开启命名空间
    namespaced: true,
    state: {
      count: 100
    },
    actions: {
      subCount: (context, value) => {
        context.commit('SUBCOUNT', value)
      }
    },
    mutations: {
      SUBCOUNT: (state, value) => {
        state.count -= value
      }
    },
    getters: {
      showSubNum: (state) => {
        return `当前显示的减运算后的数字是${state.count}.`
      }
    }
  }
}

const store = new vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})

export default store
