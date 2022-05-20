const express  = require('express');
const Router = require('Router')


const router = Router();

router.get('/', (req, res)=>{
    res.send('Home do Paínel');
});

router.get('/noticias', (req, res)=>{
    res.send('Listas de notícias cadastradas');
});


module.exports = Router();
module.exports = router;

