const mutations = {
  SAVE_USERINFO(state, value) {
    state.userInfo = value
  },
  CLEAR_USERINFO(state) {
    state.userInfo = ''
  },
  SHOW_WARN_BOX(state, value) {
    state.info = value
    state.isShow = true
  },
  CLOSE_WARN_BOX(state) {
    state.isShow = false
  }
}
export default mutations
