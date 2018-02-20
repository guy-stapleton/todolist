const express = require('express')
const app = express()

app.use(express.static('public'))

app.use('/', routes)

module.exports = app
