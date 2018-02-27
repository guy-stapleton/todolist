const express = require('express')
const server = require('../server')

const router = express.Router()

router.get('/', (req, res) => {
  res.json("Welcome from ther server, we've got fun and games")
})

module.exports = router
