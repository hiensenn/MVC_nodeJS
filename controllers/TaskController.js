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
        
        //chamando a model Task
        await Task.create(task) //salvando objeto de tarefa

        res.redirect('/tasks') //redirecionando 
    }

    static async removeTask(req, res){

        const id = req.body.id

        await Task.destroy({where: {id:id}})

        res.redirect('/tasks')

    }

    static async showTasks(req, res){

        const tasks = await Task.findAll({raw: true}) //os dados virão de forma 'bruta' em em array 


        res.render('tasks/all', {tasks}) //nome do arquivo na pasta layouts dentro da pasta tasks
    }
}