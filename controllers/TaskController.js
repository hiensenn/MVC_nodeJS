const Task = require('../models/Task')


module.exports = class TaskController{

    static createTasks(req, res){
        res.render('tasks/create') //o nome da rota pode ser encontrado na pasta layouts junto a pasta tasks
    }

    static async createTasksSave(req, res){
        //criando entidades na mão 
        const task = {
            title : req.body.title,
            description: req.body.description,
            done: false,
        }
        console.log(task)
        //chamando a model Task
        await Task.create(task) //salvando objeto de tarefa

        res.redirect('/tasks') //redirecionando 
    }

    static showTasks(req, res){
        res.render('tasks/all') //nome do arquivo na pasta layouts dentro da pasta tasks
    }
}