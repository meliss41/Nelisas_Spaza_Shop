
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

    console.log('===========================================================')
    console.log('===========================================================')

    console.log(productName +','+ qty);
    return {
        productName:productName,
        qty:qty
    };


}
exports.getSalesPerProduct = function(fileName){

    var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
    var productsSold = salesFileUtilities.getProducts(sales);
    console.log(sales);

    console.log('===========================================================')
    console.log('===========================================================')
    return sales;
};

exports.findMostPopularCategory = function(salesFileReader){
    
    var sales = rs.getSales("./files/NelisaSalesHistory.csv");

    var productsSold = {};
    sales.forEach(function(line){
                //split each line into fields
                var fields = line.split(";");
                var productName = fields[2];
                var qty = fields[3];

                
        
                if(productsSold[categoryName] === undefined){
                    productsSold[categoryName] = 0;
                };

                productsSold[categoryName] = productsSold[categoryName] + Number(qty);
                       
            });

            var catergoryName = "";
            var qty = 0;

            for(var key in productsSold){  
                var currentQty = productsSold[key]     
                if (currentQty > qty) {
                    qty = currentQty;
                    categoryName = key;
                };
            }
            
            console.log('===========================================================')
            console.log('===========================================================')
  
            console.log(categoryName +','+ qty);
            return {
                categoryName:categoryName,
                qty:qty
            };


}

exports.findMostPopularCategory = function(salesFileReader){

    var productsSold = {};
    sales.forEach(function(line){
                //split each line into fields
                var fields = line.split(";");
                var productName = fields[2];
                var qty = fields[3];

                
        
                if(productsSold[categoryName] === undefined){
                    productsSold[categoryName] = 0;
                };

                productsSold[categoryName] = productsSold[categoryName] + Number(qty);
                       
            });

            var catergoryName = "";
            var qty = 0;

            for(var key in productsSold){  
                var currentQty = productsSold[key]     
                if (currentQty > qty) {
                    qty = currentQty;
                    categoryName = key;
                };
            }
            
            console.log('===========================================================')
            console.log('===========================================================')
  
            console.log(categoryName +','+ qty);
            return {
                categoryName:categoryName,
                qty:qty
            };


}

