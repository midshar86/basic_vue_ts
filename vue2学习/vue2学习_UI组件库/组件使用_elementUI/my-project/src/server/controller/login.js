const handerLoginInfo = require('../middleware/login')

function handlerLogin(req, res) {
  const { username, password } = req.body
  console.log(username, password)
  if (username && password) {
    res.json({
      code: 200,
      status: 'ok',
      msg: '用户登录成功!',
      username,
      token: handerLoginInfo({
        username,
        password
      })
    })
  }
}

module.exports = handlerLogin
