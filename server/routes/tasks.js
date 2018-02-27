const express = require('express')
const connection = require('../db/connection')
const router = express.Router()

router.get('/', (req, res) => {
  res.json("this is the end")
})

module.exports = router
