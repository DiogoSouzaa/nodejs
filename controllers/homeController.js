const express = require('express');
const product = require('../models/Products')

 const home =  (req, res)=>{
    let age = 15;
    let showOld = false;
    
    if (age > 50) {
        showOld = true;
    }

    let list = product.getAll;
    let expensivelist = product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensivelist,
        frasesDoDia: [
           /* 'Alguma coisa muito legal',
            'Outra frase qualquer'*/
        ]
    });
};

module.exports.home = home;