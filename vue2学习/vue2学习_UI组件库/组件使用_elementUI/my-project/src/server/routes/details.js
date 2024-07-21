const express = require('express')
const handlerGetDetails = require('../controller/details')
const getDetails = express.Router()

getDetails.get('/details', handlerGetDetails)

module.exports = getDetails
