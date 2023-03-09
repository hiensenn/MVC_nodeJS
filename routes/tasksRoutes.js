//importar express
const express = require('express')


// importar routes através do express
const router = express.Router()

//importar a controller
const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTasks) // criação da task  => o createTasks está no arquivo TaskController.js
router.post('/add', TaskController.createTasksSave) // salvando dados
router.post('/remove', TaskController.removeTask) // removendo dados
router.get('/edit/:id', TaskController.updateTask) // editando dados
router.post('/edit', TaskController.updateTaskPost) // atualizando dados
router.post('/updatestatus', TaskController.toggleTaskStatus) //troca de status
router.get('/', TaskController.showTasks) // o showTasks está no arquivo TaskController.js

module.exports = router