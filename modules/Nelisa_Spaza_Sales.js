var fs = require('fs');
var productsSold = [];     

exports.findMostPopularProduct = function(salesFileReader){
    var productNames =[];
    var productMap = {};
    var soldItemsMap = {};
    var quantitySold = [];

    var sales = salesFileReader.getSales();
    
    console.log('===========================================================')
    console.log('===========================================================')
    console.log('===========================================================')
    console.log(sales)

}