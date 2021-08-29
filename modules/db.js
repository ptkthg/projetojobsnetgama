const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root','hotelon&20320', {
    host: "localhost",
    dialect:'mysql'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
}