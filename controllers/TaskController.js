const Task = require('../models/Task')


module.exports = class TaskController{

    static createTasks(req, res){
        res.render('tasks/create') //o nome da rota pode ser encontrado na pasta layouts junto a pasta tasks
    }
    static showTasks(req, res){
        res.render('tasks/all') //nome do arquivo na pasta layouts dentro da pasta tasks
    }
}