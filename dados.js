const db = require ('./modules/db')

const Dados = db.sequelize.define('sistemadecadastro', {
    nome: {
        type: db.Sequelize.STRING
    },
    logradouro: {
        type: db.Sequelize.STRING
    },
    numEnd: {
        type: db.Sequelize.NUMBER
    },
    compl: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.NUMBER
    },
    tel1: {
        type: db.Sequelize.NUMBER
    },
    tel2: {
        type: db.Sequelize.NUMBER
    },
    email: {
        type: db.Sequelize.STRING
    },
    rg: {
        type: db.Sequelize.NUMBER
    },
    cpf: {
        type: db.Sequelize.NUMBER,
        require: true
    }    
})
module.exports = Dados