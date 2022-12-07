const express = require('express')
const asyncValue = require('../middlewares/async')
const TaskController = require('../controllers/task')
const taskController = new TaskController();

const router = express.Router()

router.post('/task/create',  asyncValue(taskController.create))
router.post('/task/list',  asyncValue(taskController.list))
router.patch('/task/update',  asyncValue(taskController.update))
router.post('/task/delete', asyncValue(taskController.delete))
// router.delete('/task/delete', asyncValue(taskController.delete))

module.exports = router