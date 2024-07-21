const jsonwebtoken = require('jsonwebtoken')
const moviesDetails = require('../public/details.json')
function handlerGetDetails(req, res) {
  // 获取请求头信息
  const { headers } = req
  console.log(headers)
  if (headers.authorization) {
    jsonwebtoken.verify(headers.authorization, 'secret', (err, data) => {
      if (err) {
        res.json({
          code: 204,
          msg: '用户信息获取失败!'
        })
      } else {
        res.json({
          code: 200,
          msg: '用户信息获取成功!',
          username: data.username,
          details: moviesDetails
        })
      }
    })
  } else {
    res.json({
      code: 201,
      msg: '请检查请求中是否携带token信息!'
    })
  }
}
module.exports = handlerGetDetails
