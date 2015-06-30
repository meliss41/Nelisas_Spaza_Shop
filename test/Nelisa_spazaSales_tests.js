var assert = require("assert");
var productsSold = require('../modules/Nelisa_Spaza_Sales');

var SalesFileReader = require('../modules/read_sales');

describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){

    	var reader = new SalesFileReader('./files/NelisaSalesHistory.csv');
    	assert.equal(448, reader.getSales().length);

        //assert.equal(448, productsSold.findSalesRows('./files/NelisaSalesHistory.csv').length);
    });

    it('should find the most popular product', function(){

        //think how to find most popular product...

        //you might need some other functions to help you...
        //var reader = new SalesFileReader('./files/NelisaSalesHistory.csv');

        // Mock object
        var reader = {
        	getSales : function(){
        	return [  
        		[ 'Sunday', '1-Mar', 'Apples', '1', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Pears', '5', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Apples', '4', 'R2,00' ],
        		[ 'Sunday', '1-Mar', 'Pears', '5', 'R2,00' ]
        	]}
        };

        var mostPopularProduct = productsSold.findMostPopularProduct(reader);
        
        //
        //assert.equal(mostPopularProduct, "Pears");
        assert.equal(mostPopularProduct, {name : "Pears", qty: 10});

    });

    
});