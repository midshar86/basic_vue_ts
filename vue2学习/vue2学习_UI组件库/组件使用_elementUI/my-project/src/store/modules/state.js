const state = {
  // 用户初始信息从本地读取
  userInfo: sessionStorage.getItem('userLoginInfo') ? JSON.parse(sessionStorage.getItem('userLoginInfo')) : '',
  info: '',
  isShow: false
}

export default state
