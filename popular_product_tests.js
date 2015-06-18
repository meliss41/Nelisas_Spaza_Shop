var assert = require("assert");

describe("Find data in file", function(){

    it('should return all products as they are in the csv file', function(done){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        products.productNames(function(err, product){
        assert.equal(449, product.length);
        //assert.equal("Imasi", product[2].itemName);
        done();
        });
         
    });

    it('should return grouped items', function(){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var groupedProducts = products.groupedItems();
        console.log(groupedProducts);
        assert.equal(125, groupedProducts["Imasi"]);
       
    });
    
it('should return most popular items', function(){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        assert.equal(172, popularProduct["Mixed Sweets 5s"]);

    });

});

it('should return the least popular item', function(){
    var Products = require("./productsSold");
    var products = new Products('./Nelisa Sales History.csv');
    var leastPopular = products.leastPopular();
    var result = {currentItem: 'Valentine Cards', numberSold:14};
    assert.deepEqual(leastPopular, result)
    });

it('should return product category', function(done){
        var Products = require("../productsSold");
        var products = new Products('./NelisaSalesHistory.csv');
        var productsCategory = products.popularCategory();
        var result = {Category :'Dairy', numberSold: 297}               
        var result = {Category :'Beaverages', numberSold: 328}
        var result = {Category :'Canned Food', numberSold: 278}
        var result = {Category :'Toiletries', numberSold: 76}        
        var result = {Category :'Starch Food (Iwisa Pap 5kg)', numberSold: 47}        
        var result = {Category :'Bakery (Bread)', numberSold: 130}
        var result = {Category :'Sweets', numberSold: 192}
        var result = {Category :'Fruit', numberSold: 228}
        var result = {Category :'Extras (Rose (plastic), Valentine Cards)', numberSold: 28} 
        assert.deepEqual(productsCategory, result)  

                done();
        })


});
