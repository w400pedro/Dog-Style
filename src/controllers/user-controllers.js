const users = require('../database/user-db');
const dogs = require('../database/dogs-db');

const { nanoid } = require('nanoid');

class userFunction {
    async showProfile(req, res) {
        const userLogado = req.session.user;
        if(userLogado){

        res.render('user-profile', { users: userLogado })
        }else{
            return res.send('Você não está logado com uma conta <br> <a href="/login.html">Login</a>')
        }
    }

    async userRegistration(req, res) {

        res.render('user-profile')
    }

    async cadastrar(req, res) {
       

        const user = req.body;
        users.push({
        racafavorita: '',
        id: nanoid(8),
        adm: false,
        data_nascimento: user.data_nascimento,
        ...user
        });
        res.redirect('/login.html');

    }

    async login(req, res) {

        const { email, senha } = req.body;
        const usuarioEcontrado = users.find(u => u.email == email);

        if (!usuarioEcontrado) return res.send('Usuario não encontrado');

        if (usuarioEcontrado.senha == senha) {
            req.session.user = usuarioEcontrado;
            console.log('Logado com Sucesso')
            return res.redirect('/');

        } else {
            return res.send('Senha Errada');
        }

    }

    async userFavorite(req, res) {
        const userLogado = req.session.user;
        if (userLogado) {
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

    async userUnfavorite(req, res) {
        const userLogado = req.session.user;
        if(userLogado){
        const { id } = req.params;
        const littledog = dogs.find(item => item.id == id);
        let c = 0
        while(c<users.length){
            if(userLogado.racafavorita == littledog.raca && userLogado.id == users[c].id){
                console.log(userLogado.racafavorita)
                users[c].racafavorita = ''
                req.session.user = users[c];
                console.log('Desfavoritado');
            }
            c++
        }
        res.redirect('/')
    }else{
        return res.send ('Você não está logado com uma conta <br> <a href="/login.html">Login</a>');
    }
}

async userLogout(req, res){
    const userLogado = req.session.user;
    if(userLogado){
        req.session.user = ''
        console.log('Deslogado com sucesso');
        res.redirect('/')
    }else{
        return res.send("Você não pode dar logout sem estar logado antes! <br><a href='/dogs'>Voltar</a>")
    }
}

    async allUser(req, res){
        const userLogado = req.session.user;
        if(userLogado && userLogado.adm == true){

           res.render('admin-all-users', { users: userLogado })
        }
    }

}

module.exports = { userFunction }