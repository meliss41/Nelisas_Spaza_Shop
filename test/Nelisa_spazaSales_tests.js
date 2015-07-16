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
        var salesPerProduct = productsSoldReader.getSalesPerProduct('./files/NelisaSalesHistory.csv');
        
        console.log(salesPerProduct);

        assert.equal(1420, salesPerProduct["Milk 1l"]); 
        assert.equal(1410, salesPerProduct["Iwisa Pap 5kg"]); 
        assert.equal(700, salesPerProduct["Heart Chocolates"]); 

    });

    it('should find the total earnings per category', function(){
        var salesPerProduct = SalesFileProcessing.getSalesPerProductsCategory('./files/NelisaSalesHistory.csv');                     
                    console.log(salesPerProduct);

                         assert.equal(6110, salesPerProduct['Short_Life_Groceries']);
                         assert.equal(180, salesPerProduct['Tinned_Food']);
                         assert.equal(328, salesPerProduct['Beverages']);
                         assert.equal(145, salesPerProduct['Long_Life_Groceries']);
                         assert.equal(76, salesPerProduct['Toiletries']);
                         assert.equal(228, salesPerProduct['Fruit']);
                         assert.equal(192, salesPerProduct['Luxuries']);
                         assert.equal(2, salesPerProduct['Novelty_Goods']);

             //assert.equal(earningsPerProductsCategory ,result); 
         });

});
