const { Router }  = require('express');
const router = Router();
const { dogFunction } = require('../controllers/dog-controllers');


const funcaodog = new dogFunction

router.get('/lista', funcaodog.exibeDog);

module.exports = router;