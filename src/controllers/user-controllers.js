//const users = require('../database/user-db'); Descomenta qnd criar o banco

class userFunction {

async showRegister(req,res){
    res.render('user-register')
}

//async userRegister(req,res){
    //Ai tu pega por post o que o usuario digitou la no EJS e adiciona dentro do "users" (Banco de dados JSON) (O arquivo do professor da semana 6 mostra exatamente como faz k)
//}
}

module.exports = { userFunction }