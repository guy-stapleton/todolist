const express = require('express')
const routes = require('./routes/index')
const bodyParser = require('body-parser')

const apiTasks = require('./routes/tasks')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.use('/', routes)
app.use('/api/tasks', apiTasks)

module.exports = (db) => {
  app.set('db', db)
  return app
}
