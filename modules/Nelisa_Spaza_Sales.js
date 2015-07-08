
var salesFileUtilities = require('./sales_file_utilities');

exports.findMostPopularProduct = function(salesFileReader){
    
    var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
    var productsSold = salesFileUtilities.getProducts(sales);

    var productName = "";
    var qty = 0;

    for(var key in productsSold){  
        var currentQty = productsSold[key]     
        if (currentQty > qty) {
            qty = currentQty;
            productName = key;
        };
    }
    console.log(productName +','+ qty);
    return {
        productName:productName,
        qty:qty
    };
        console.log('===========================================================');
        console.log('===========================================================');
}

var salesFileUtilities = require('./sales_file_utilities');

exports.getSalesPerProduct = function(fileName){

    var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
    var productsSold = salesFileUtilities.getProducts(sales);
    console.log(sales);
    return sales;

};

exports.findMostPopularCategory = function(salesFileReader){
    
    var productCategories = {
                'Fanta 500ml' : 'Beverages',
                'Coke 500ml' : 'Beverages',
                'Cream Soda 500ml' : 'Beverages',
                'Shampoo 1 litre' : 'Toiletries',
                'Soap Bar' : 'Toiletries',
                'Mixed Sweets 5s' : 'Luxuries',
                'Heart Chocolates' : 'Luxuries',
                'Iwisa Pap 5kg' : 'Long_Life_Groceries',
                'Top Class Soy Mince' : 'Long_Life_Groceries',
                'Bread' : 'Short_Life_Groceries',
                'Milk 1l' : 'Short_Life_Groceries',
                'Imasi' : 'Short_Life_Groceries',
                'Rose (plastic)' : 'Novelty_Goods',
                'Valentine Cards' : 'Novelty_Goods',
                'Bananas - loose' : 'Fruit',
                'Apples - loose' : 'Fruit',
                'Chakalaka Can' : 'Tinned_Food',
                'Gold Dish Vegetable Curry Can' : 'Tinned_Food'
            };

    var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
    var qtyPerProduct = salesFileUtilities.getProducts(sales);

    var qtyPerCategory = {};

    for(var productName in qtyPerProduct){
        console.log(productName);
        var qty = qtyPerProduct[productName];
        var categoryName = productCategories[productName];
        console.log(categoryName);

        if(qtyPerCategory[categoryName] === undefined){
            qtyPerCategory[categoryName] = 0;
        };
        qtyPerCategory[categoryName] = qtyPerCategory[categoryName] + Number(qty);
    }

    console.log('productCategories...')
    console.log(qtyPerCategory)

    var categoryName = "";
    var qty = 0;

    for(var key in qtyPerCategory){  
        var currentQty = qtyPerCategory[key]     
        if (currentQty > qty) {
            qty = currentQty;
            categoryName = key;
        };  
    }
    
    console.log('===========================================================')
    console.log('===========================================================')

    console.log(categoryName +','+ qty);
    //console.log(productCategories);
    return {
        categoryName: categoryName,
        qty:qty
    };
}

