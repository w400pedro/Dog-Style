const { Router } = require('express');
const { route } = require('express/lib/application');
const { append } = require('express/lib/response');
const router2 = Router();
const { userFunction } = require('../controllers/user-controllers');

const funcaouser = new userFunction;

router2.get('/', funcaouser.showProfile);

router2.get('/favorite/:id', funcaouser.userFavorite);

router2.get('/unfavorite/:id', funcaouser.userUnfavorite);

router2.get('/update', funcaouser.showEditProfile);

router2.get('/logout', funcaouser.userLogout);

router2.get('/alluser', funcaouser.showUsers);

router2.get('/conceder/:id', funcaouser.giveAdm);

router2.get('/revogar/:id', funcaouser.removeAdm);

router2.post('/cadastrar', funcaouser.userRegistration);

router2.post('/login', funcaouser.userLogin);

router2.post('/updateprofile', funcaouser.userUpdate);


module.exports = router2;