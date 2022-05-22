
const data = [
    {title: 'Produto X', price: 10},
    {title: 'Produto Y', price: 15},
    {title: 'Produto W', price: 20},
    {title: 'Produto G', price: 05}
];

getAll = function(){
    return data;
}

getFromPriceAfter = function(price) {
    return data.filter(item => {
        if(item.price >= price) {
            return true;
        } else {
            return false;
        }
    });
}

module.exports.getAll = getAll;
module.exports.getFromPriceAfter = getFromPriceAfter;