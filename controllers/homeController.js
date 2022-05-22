const express = require('express');


 const home =  (req, res)=>{
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
};

module.exports.home = home;