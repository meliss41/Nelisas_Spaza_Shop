
  var salesFileUtilities = require('./sales_file_utilities');
	exports.findSalesEarningsRows = function(fileName){

		var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
		var earningsPerProducts = salesFileUtilities.getProducts(sales);
		console.log('===========================================================below - Purchased products');
		console.log(sales);

};
		
exports.getStockedProducts = function(salesLines){
        var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
        var purchasedProducts = salesFileUtilities.getProducts(sales);

	purchasedProducts = {};
    salesLines.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];
    
            if(purchasedProducts[productName] === undefined){
                purchasedProducts[productName] = 0;
            };

            purchasedProducts[productName] = purchasedProducts[productName] + Number(qty);
                   
        });
    return purchasedProducts;

}