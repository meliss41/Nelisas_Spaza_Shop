var fs = require('fs');
exports.findMostPopularProduct = function(salesFileReader){
    var productNames =[];
    var productMap = {};
    var soldItemsMap = {};
    var quantitySold = [];

    var sales = salesFileReader.getSales();
  	

    console.log('===========================================================');
		var lines = fileContent.split('\r').splice(1);
		lines.forEach(function(product){
  		 	var hold = product.split(',');
    		var productName = hold[2];
    		var quantitySold = hold[3];
    	if (productMap[productName]=== undefined) {
    			productNames.push(productName);
    			productMap[productName]= 0;

    			console.log(productNames);
    	}

    });
    console.log('===========================================================')
    console.log('===========================================================')
    console.log(sales)

}