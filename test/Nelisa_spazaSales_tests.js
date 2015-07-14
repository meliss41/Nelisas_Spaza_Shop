var assert = require("assert");
var productsSoldReader = require('../modules/Nelisa_Spaza_Sales');
var purchasedProductsReader = require('../modules/Nelisa_Spaza_Sales_earnings');
var SalesFileProcessing = require('../modules/sales_file_utilities');

describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){

    	var reader = SalesFileProcessing.getSales('./files/NelisaSalesHistory.csv');
    	assert.equal(448, reader.length);

    });

   it('should find the most popular product plus qty', function(){
        var reader = productsSoldReader.findMostPopularProduct('./files/NelisaSalesHistory.csv');
        assert.deepEqual({"productName":"Mixed Sweets 5s","qty":172},reader);
    });

    it('should find all the sales rows', function(){
        var salesPerProduct = productsSoldReader.getSalesPerProduct('./files/NelisaSalesHistory.csv');
         assert.deepEqual(448, salesPerProduct.length); 

    });
    it('should find most popular category name plus qty', function(){
            var salesPerProduct = productsSoldReader.findMostPopularCategory('./files/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Short_Life_Groceries", "qty" : 397}); 

        });

    it('should find least popular product name plus qty', function(){
            var salesPerProduct = productsSoldReader.findLeastPopularProduct('./files/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct,{"productName":"Rose (plastic)","qty":14} ); 

        });

    it('should find least popular category name plus qty', function(){
            var salesPerProduct = productsSoldReader.findLeastPopularCategory('./files/NelisaSalesHistory.csv');
             assert.deepEqual(salesPerProduct, {"categoryName" : "Novelty_Goods", "qty" : 28}); 

        });

});
   describe("Nelisa's spaza sales earnings  file processing", function(){ 

    it('should find the purchases rows in the file to get the legth of lines', function(){
           var purchasedProducts = SalesFileProcessing.getSales("./files/NelisaPurchases.csv")
             assert.equal(153, purchasedProducts.length); 

        });

    it('should find the purchased products plus qty', function(){
            var earningsPerProduct = purchasedProductsReader.findSalesEarningsRows('./files/NelisaPurchases.csv');
             assert.equal(earningsPerProduct); 

        });
    it('should find the total earnings per product', function(){
            var earningsPerProduct = purchasedProductsReader.getEarningsPerProduct('./files/NelisaPurchases.csv');
            result = {
                purchasedProductName : "Milk", 
                totalCost : Number("R289".substring(1))
            };
             assert.equal(earningsPerProduct); 

        });

    it('should find the total earnings per category', function(){
            var earningsPerCategory = purchasedProductsReader.getEarningsPerCategory('./files/NelisaPurchases.csv');
             assert.equal(earningsPerCategory); 

        });


});
