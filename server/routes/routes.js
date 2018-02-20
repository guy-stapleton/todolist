const express = require('express')
const server = require('../server')

const router = express.Router()

router.get('/', (req, res) => {
  res.send(`<h1>Here is some friendly HTML</h1>`)
})

module.exports = router
