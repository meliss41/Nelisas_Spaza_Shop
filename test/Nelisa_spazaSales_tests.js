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

        var mostPopular =  productsSold;
        var reader = mostPopular.findMostPopularProduct('./files/NelisaSalesHistory.csv');
         assert.deepEqual({"productName":"Mixed Sweets 5s","qty":172},reader);
    });

    
});