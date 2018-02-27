const express = require('express')
const connection = require('../db/connection')
const router = express.Router()

router.get('/', (req, res) => {
  res.json([{task_id: 1, task_name: 'Pick up drycleaning', notebook_id: 1},
  {task_id: 2, task_name: 'Get report from Susan', notebook_id: 2},
  {task_id: 3, task_name: 'Send birthday to Amy', notebook_id: 1}])
})

module.exports = router
