const users = require('../database/user-db');
const dogs = require('../database/dogs-db');

const { nanoid } = require('nanoid');

class userFunction {
    async showProfile(req, res) {
        const userLogado = req.session.user;
        if(userLogado){
        console.log(users)
        console.log( req.session.user)
        res.render('user-profile', { users: req.session.user })
        }else{
            return res.send('Você não está logado com uma conta <br> <a href="/login.html">Login</a>')
        }
    }

    async userRegistration(req, res) {

        res.render('user-profile')
    }

    async cadastrar(req, res) {
        console.log('usercontrollers/cadastrar');

        const user = req.body;
        users.push(user);  // salvando?, fazer a data ser no formato certo, e fazer o id entrar k
        //racafavorito: ''
        //id: nanoid(10)
        //adm: false (por padrao vem como falso, ai eu vou botar q só outros adms podem dar adm pra outro cara k)
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

    async userFavorite(req, res) {
        const userLogado = req.session.user;
        if (userLogado) {
        const userLogado = req.session.user;
        const { id } = req.params;
        const littledog = dogs.find(item => item.id == id);
        let c = 0;
        while (c < users.length) {
            if (users[c].id == userLogado.id) {
                users[c].racafavorita = littledog.raca
                req.session.user = users[c];
                console.log('Favoritado')
            }
            c++
        }
        
        res.redirect('/')
        }else{
            return res.send('Você não está logado com uma conta <br> <a href="/login.html">Login</a>')
        }
    }

    //FALTA FAZER UNFAVORITE(EU FAÇO ISSO)

}

module.exports = { userFunction }