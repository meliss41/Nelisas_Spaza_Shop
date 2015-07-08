var assert = require("assert");
var productsSold = require('../modules/Nelisa_Spaza_Sales');
var SalesFileReader = require('../modules/sales_file_utilities');

describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){

    	var reader = SalesFileReader.getSales('./files/NelisaSalesHistory.csv');
    	assert.equal(448, reader.length);

    });

   it('should find the most popular product plus qty', function(){
        var reader = productsSold.findMostPopularProduct('./files/NelisaSalesHistory.csv');
        assert.deepEqual({"productName":"Mixed Sweets 5s","qty":172},reader);
    });

    it('should find all the sales rows', function(){
        var salesPerProduct = productsSold.getSalesPerProduct('./files/NelisaSalesHistory.csv');
         assert.deepEqual(448, salesPerProduct.length); 

    });
    it('should find most popular category name plus qty', function(){
            var salesPerProduct = productsSold.findMostPopularCategory('./files/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Short_Life_Groceries", "qty" : 397}); 

        });
    it('should find least popular category name plus qty', function(){
            var salesPerProduct = productsSold.findLeastPopularCategory('./files/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Novelty_Goods", "qty" : 28}); 

        });
        
});
