var assert = require("assert");

describe ("find the most popular product", function(){
    it('should return the most popular product', function(done){
        var Products = require("../popular_product")
        var products = new Products("..Nelisa Sales History.csv")

        product.popular_product(function(err, products){
            assert.deepEqual([], products);
            done();
        })
    })
})