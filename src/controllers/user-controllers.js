//const users = require('../database/user-db'); Descomenta qnd criar o banco

class userFunction {
    async showProfile(req, res) {
        // cara aqui tu passa pela URL o usuario logado res.render('user-profile', {user.logado} algo assim, VE O VIDEO DE 4 MIN Q TE MANDEI LA, ELE VAI AJUDAR
        res.render('user-profile')
    }

    async userRegistration(req, res){
        // VE A PORRA DA SEMANA 6 Q TU VAI ENTENDER TUDO Q TEM Q FZR AQUI
        res.render('user-profile')
    }
}

module.exports = { userFunction }