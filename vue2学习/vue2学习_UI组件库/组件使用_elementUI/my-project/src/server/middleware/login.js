const jsonwebtoken = require('jsonwebtoken')

function handerLoginInfo(userInfo) {
  return jsonwebtoken.sign(userInfo, 'secret', { expiresIn: 3600 })
}

module.exports = handerLoginInfo
