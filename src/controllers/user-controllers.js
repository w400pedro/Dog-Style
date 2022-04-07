const users = require('../database/user-db'); //Descomenta qnd criar o banco

const { nanoid } = require('nanoid'); //USA ESSA MERDA IGUAL EU USEI NO DOG CONTROLLER
class userFunction {
    async showProfile(req, res) {
        // cara aqui tu passa pela URL o usuario logado res.render('user-profile', {user.logado} algo assim, VE O VIDEO DE 4 MIN Q TE MANDEI LA, ELE VAI AJUDAR
        console.log(req.session.user)
        res.render('user-profile', { users: req.session.user })
        console.log(req.session.user)
    }

    async userRegistration(req, res){
        // VE A PORRA DA SEMANA 6 Q TU VAI ENTENDER TUDO Q TEM Q FZR AQUI
        res.render('user-profile')
    }

    async cadastrar(req, res) {
        console.log('usercontrollers/cadastrar');

        const user = req.body;
        users.push(user);  // salvando?, fazer a data ser no formato certo, e fazer o id entrar k
        //racafavorito: ''
         //id: nanoid(10)
        console.log({ users });
        res.redirect('/login.html');

    }

    async login(req, res) {
    
        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('Usuario não encontrado');

        if (usuarioEcontrado.senha == senha) {
           req.session.user = usuarioEcontrado;
           console.log(req.session.user)
           console.log('Logado com Sucesso')
            return res.redirect('/');

        } else {
            return res.send('Senha Errada');
        }
        
    }
}

module.exports = { userFunction }