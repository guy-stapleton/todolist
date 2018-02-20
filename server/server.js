const express = require('express')
const app = express()
const routes = require('./routes/routes')

app.use(express.static('public'))

app.use('/', routes)

module.exports = (db) => {
  app.set('db', db)
  return app
}
