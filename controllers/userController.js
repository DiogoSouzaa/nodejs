const express = require('express');

const nome = (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;

    res.render('pages/nome', {
        nome,
        idade
    });
};

const idadeForm =  (req, res)=> {
    res.render('pages/idade');
};

const idadeAction = (req, res)=> {
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
};


module.exports = nome;
module.exports = idadeForm;
module.exports = idadeAction;