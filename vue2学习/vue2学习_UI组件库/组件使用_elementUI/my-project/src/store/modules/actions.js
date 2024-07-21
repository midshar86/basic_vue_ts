import req from '@/api'
import router from '@/router'
const actions = {
  // 处理用户登录
  handlerUserInfo({ commit }, value) {
    req.post('/user/login', value).then(res => {
      console.log(res)
      // 登录成功后存放用户信息到 vuex
      if (res.code === 200 && res.status === 'ok') {
        const userinfo = {
          username: res.username,
          token: res.token
        }
        commit('SAVE_USERINFO', userinfo)

        // 并且将信息存放到本地
        sessionStorage.setItem('userLoginInfo', JSON.stringify(userinfo))

        // 显示提示信息
        commit('SHOW_WARN_BOX', res.msg + '3s之后将跳转至首页!')
        const timer = setTimeout(() => {
          clearTimeout(timer)
          router.push('/')
        }, 3000)
      }
    }).catch(err => console.log(err))
  },
  showWarnBox({ commit }, value) {
    commit('SHOW_WARN_BOX', value)
  }
}
export default actions
