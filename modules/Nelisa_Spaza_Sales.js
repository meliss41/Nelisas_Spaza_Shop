var fs = require('fs');
exports.findMostPopularProduct = function(salesFileReader){
                // var productNames =[];
                // productMap = {};
                // var soldItemsMap = {};
                // var quantitySold = [];


    var sales = salesFileReader.getSales();
<<<<<<< HEAD

                  // var products = fields[2];
                  // var productQtySold = fields[3];
    

                  // var productsSoldMap ={
                  //           products:ItemName,
                  //           productQtySold:number(productQtySold)
                  //       }; 

                  // console.log(products);
                  // console.log(productQtySold);   
    console.log('===========================================================')
=======
  	

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
>>>>>>> 2fdee6771da44f2577a54e0784e4b711c470a70a
    console.log('===========================================================')
    console.log('===========================================================')
    console.log(sales)

}