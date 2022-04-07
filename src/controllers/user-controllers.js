//const users = require('../database/user-db'); Descomenta qnd criar o banco

class userFunction {

    //async userRegistration(req,res){
    //Ai tu pega por post o que o usuario digitou la no EJS e adiciona dentro do "users" (Banco de dados JSON) (O arquivo do professor da semana 6 mostra exatamente como faz k)
    //}

    async showProfile(req, res) {
        res.render('user-profile')
    }

    async userRegistration(req, res){
        // aqui tu mete o user no JSON papi (eu ja usei la no user-routes e botei q essa funcao seria um post) (mas antes disso tu precisa fzr a tela de cadastr obv k o action ja deixei prontinho pra ti meu tesao )
        res.render('user-profile')
    }
}

module.exports = { userFunction }