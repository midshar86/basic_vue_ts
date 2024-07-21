const express = require('express')
const handlerLogin = require('../controller/login')
const login = express.Router()

login.post('/login', handlerLogin)

module.exports = login
