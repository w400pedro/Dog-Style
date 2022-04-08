const { Router } = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router2 = Router();
const { userFunction } = require('../controllers/user-controllers');

const funcaouser = new userFunction;

router2.get('/', funcaouser.showProfile);

router2.get('/favorite/:id', funcaouser.userFavorite);

router2.post('/login', funcaouser.login);

router2.post('/cadastrar', funcaouser.cadastrar);''

module.exports = router2;