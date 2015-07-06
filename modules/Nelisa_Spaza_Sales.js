
var rs = require('./read_sales');
exports.findMostPopularProduct = function(salesFileReader){
    
    var sales = rs.getSales("./files/NelisaSalesHistory.csv");
    var productsSold = rs.getProducts(sales);

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