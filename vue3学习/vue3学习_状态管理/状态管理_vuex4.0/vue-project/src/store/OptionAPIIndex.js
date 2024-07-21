import { createStore } from 'vuex'

// 创建一个仓库存放数据
const store = createStore({
  state() {
    return {
      fruitInfo: {
        name: 'apple',
        type: 'Red Fuji',
        price: 25
      }
    }
  },
  getters: {
    packingPrice(state) {
      return '$' + state.fruitInfo.price + '.00'
    }
  },
  actions: {
    priceAdd({ commit }, value) {
      commit('changePrice', value)
    }
  },
  mutations: {
    changePrice(state, value) {
      state.fruitInfo.price += value
    }
  }
})

export default store