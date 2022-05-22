const express  = require('express');
const Router = require('Router');

const home = require('../controllers/homeController');

const info = require('../controllers/infoController');

const user = require('../controllers/userController')

const router = Router();

router.get('/', home);
router.get('/contato', info.contato );
router.get('/sobre', info.sobre);
router.get('/nome',user.nome);
router.get('/idade',user.idadeForm);
router.post('/idade-resultado', user.idadeAction );
       

module.exports = Router();
module.exports = router;

