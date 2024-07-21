const express = require('express')
const cors = require('cors')
const login = require('./login')
const details = require('./details')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/user', login)
app.use('/user', details)

const res = app.listen(3030, () => {
  console.log('服务器开启成功!正在监听' + res.address().port + '端口号!')
})
