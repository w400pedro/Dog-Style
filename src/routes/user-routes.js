const { Router } = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router2 = Router();
const { userFunction } = require('../controllers/user-controllers');

const funcaouser = new userFunction;

router2.get('/', funcaouser.showProfile);

routes.post('/login', usersController.login);

router2.get('/register', funcaouser.userRegistration); // CARA QND TU TERMINAR DE FZR TODA AS COISAS DE CADASTRO, TU MUDA ESSE ROUTER2.GET PRA ROUTER2.POST, AI TEUS ARQUIVOS DOS INPUTS VAO SER USADOS COMO POST

module.exports = router2;