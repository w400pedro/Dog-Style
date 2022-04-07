const { Router } = require('express');
const { route } = require('express/lib/application');
const router = Router();
const { dogFunction } = require('../controllers/dog-controllers');


const funcaodog = new dogFunction;

router.get('/', funcaodog.showDog);
router.get('/details/:id', funcaodog.showDetails);
router.get('/create', funcaodog.showCreateDog);
router.get('/delete/:id', funcaodog.deleteDog);
router.get('/update/:id', funcaodog.updateDog);

router.post('/', funcaodog.createDog);

module.exports = router;