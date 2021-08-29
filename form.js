const express = require('express'); // importando o express
const app = express (); // iniciando o express
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const Dados = require('./dados');
const handlebars = require('handlebars')
const sequelize = new Sequelize( 'sistemadecadastro', 'root','hotelon&20320', {
    host: "localhost",
    dialect:'mysql' 
})
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao se conectar: ' +erro)
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas:
app.get("/formulario", function(req, res) {
    res.sendFile(__dirname + '/form.html')
})
app.post ('/cadastro',function(req,res){
    Dados.create ({
        nome: req.body.nome,
        logradouro: req.body.logradouro,
        numEnd: req.body.numEnd,
        compl: req.body.compl,
        celular: req.body.celular,
        tel1: req.body.tel1,
        tel2: req.body.tel2,
        email: req.body.email,
        rg: req.body.rg,
        cpf: req.body.cpf
    }).then(function(){
        res.redirect(301,"/cadastrado.html")
    }).catch(function(erro){
        res.status(500)
    })
})
app.listen(5000,function(erro) {
    if(erro){
        console.log('Ocorreu um erro!');
    }else {
        console.log('Servidor iniciado com sucesso!')
    }
    })



