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

const store = new vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
