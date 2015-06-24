var assert = require("assert");
var productsSold = require('../modules/Nelisa_Spaza_Sales');

describe("Nelisa's spaza sales processing", function(){

    it('should find all the sales rows in the file', function(){       
        assert.equal(448, productsSold.findSalesRows('./files/NelisaSalesHistory.csv').length);
    });

    it('should find the most popular product', function(){

        //think how to find most popular product...

        //you might need some other functions to help you...

        var mostPopularProduct = productsSold.findMostPopularProduct();
        assert.equal(productsSold.findSalesRows('./files/NelisaSalesHistory.csv'));

    });

    
});