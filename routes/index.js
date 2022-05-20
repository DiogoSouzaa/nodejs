const express  = require('express');
const Router = require('Router')


const router = Router();

router.get('/', (req, res)=>{
    let age = 15;
    let showOld = false;
    
    if (age > 50) {
        showOld = true;
    }
    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20}
        ],

        frasesDoDia: [
           /* 'Alguma coisa muito legal',
            'Outra frase qualquer'*/
        ]
    });
});

router.get('/contato', (req, res)=>{
    res.render('pages/contato');
});

router.get('/sobre', (req, res)=>{
    res.render('pages/sobre');
});

router.get('/nome', (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;

    res.render('pages/nome', {
        nome,
        idade
    });

router.get('/idade', (req, res)=> {
    res.render('pages/idade');
});
router.post('/idade-resultado', (req, res)=> {
    let mostrarIdade = false;
    let idade = 0;
    if(req.body.ano) {
        let anoNascimento = req.body.ano;
        let anoAtual = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
});
       
});
module.exports = Router();
module.exports = router;

