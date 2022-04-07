const users = require('../database/user-db'); //Descomenta qnd criar o banco

class userFunction {
    async showProfile(req, res) {
        // cara aqui tu passa pela URL o usuario logado res.render('user-profile', {user.logado} algo assim, VE O VIDEO DE 4 MIN Q TE MANDEI LA, ELE VAI AJUDAR
        res.render('user-profile')
    }

    async userRegistration(req, res){
        // VE A PORRA DA SEMANA 6 Q TU VAI ENTENDER TUDO Q TEM Q FZR AQUI
        res.render('user-profile')
    }

    async login(req, res) {
    
        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('Usuario não encontrado');

        if (usuarioEcontrado.senha == senha) {
            req.session.user = usuarioEcontrado;
            return res.send('Logado com Sucesso');
        } else {
            return res.send('Senha Errada');
        }
        
    }
}

module.exports = { userFunction }