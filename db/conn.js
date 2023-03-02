const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodemvc', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'

})

try{
    sequelize.authenticate()
    console.log("Conectado ao mysql")
}catch(error){
    console.log(`não foi possível conectar: ${error}`)
}

exports.default = sequelize