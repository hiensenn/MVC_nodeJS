//importar express
const express = require('express')


// importar routes através do express
const router = express.Router()

//importar a controller
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTasks) // o createTasks está no arquivo TaskController.js
router.post('/add', TaskController.createTasksSave) // salvando dados
router.get('/', TaskController.showTasks) // o showTasks está no arquivo TaskController.js

module.exports = router