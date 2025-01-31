const express = require('express')
// const cors = require('cors')
// 导入一个需要使用的静态文件
const films = require('./public/films.json')
const app = express()
const port = 3030

// 设置跨域资源共享
// app.use(cors())
// 设置前端传递的参数为 application/x-www-form-urlencoded 格式
app.use(express.urlencoded({ extended: true }))

app.get('/home', (req, res) => {
  res.json({
    status: 200,
    msg: '获取服务端数据成功!'
  })
})

app.get('/films', (req, res) => {
  // 返回这个静态文件
  res.json(films)
})

app.post('/login', (req, res) => {
  // 前端传递的参数都在 req.body 中
  let { body } = req
  let token = `${body.username}+${body.password}`
  console.log(body)
  res.send({
    status: 200,
    username: body.username,
    token
  })
})

app.listen(port, () => {
  console.log(`服务器开启成功!正在监听${port}端口.`)
})