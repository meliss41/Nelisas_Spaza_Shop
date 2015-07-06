
var rs = require('./read_sales');
exports.findMostPopularProduct = function(salesFileReader){
    
    var sales = rs.getSales("./files/NelisaSalesHistory.csv");

    var productsSold = {};
    sales.forEach(function(line){
                //split each line into fields
                var fields = line.split(";");
                var productName = fields[2];
                var qty = fields[3];
        
                if(productsSold[productName] === undefined){
                    productsSold[productName] = 0;
                };

                productsSold[productName] = productsSold[productName] + Number(qty);
                       
            });

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