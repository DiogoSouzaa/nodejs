const express  = require('express');
const Router = require('Router');

const home = require('../controllers/homeController');

const contato = require('../controllers/infoController');
const sobre = require('../controllers/infoController');

const nome = require ('../controllers/userController');
const idadeForm = require('../controllers/userController');
const idadeAction = require('../controllers/userController');


const router = Router();

router.get('/', home);
router.get('/contato', contato );
router.get('/sobre', sobre);
router.get('/nome',nome);
router.get('/idade',idadeForm);
router.post('/idade-resultado', idadeAction );
       

module.exports = Router();
module.exports = router;

