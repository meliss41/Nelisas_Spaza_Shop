var assert = require("assert");
var productsSold = require('../modules/Nelisa_Spaza_Sales');

var SalesFileReader = require('../modules/read_sales');

describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){

    	var reader = SalesFileReader.getSales('./files/NelisaSalesHistory.csv');
    	assert.equal(448, reader.length);

        //assert.equal(448, productsSold.findSalesRows('./files/NelisaSalesHistory.csv').length);
    });

    it('should find the most popular product', function(){

        //think how to find most popular product...

        // you might need some other functions to help you...        
       
        // Mock object
        var reader = {
        	findMostPopularProduct : function(){
        	return [  
        		[ 'Sunday', '1-Mar', 'Apples', '1', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Pears', '5', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Apples', '4', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Pears', '5', 'R2,00' ]
        	]}
        };
        ;
         var mostPopular = require('../modules/Nelisa_Spaza_Sales');
         var reader = mostPopular.findMostPopularProduct('./files/NelisaSalesHistory.csv');
        assert.equal({"productName":"Mixed Sweets 5s","qty":172},reader);
        // assert.equal(reader,{productName : "Mixed Sweets 5s", qty : 172});
        // var mostPopularProduct = productsSold.findMostPopularProduct();
        // assert.equal(productsSold.findSalesRows('./files/NelisaSalesHistory.csv'));
    });

    
});