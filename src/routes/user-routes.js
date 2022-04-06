const { Router } = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router2 = Router();
const { userFunction } = require('../controllers/user-controllers');

const funcaouser = new userFunction;

    router2.get('/register', funcaouser.showRegister); //Aqui tu ta dizendo q qnd essa URL /register for acessada, a function do controller vai ser chamada e exibida (tudo que a função faz é renderizar a tela de cadastro k)

    module.exports = router2;