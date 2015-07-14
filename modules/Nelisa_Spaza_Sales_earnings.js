
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

exports.getEarningsPerProduct = function(salesLines){
        var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
        var productsSold = salesFileUtilities.getProducts(sales);
        totalCost = {};
    purchasedProductsMap = {};
    sales.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];
            var amountEarned = fields[5]
    
            if(purchasedProductsMap[productName] === undefined){
                purchasedProductsMap[productName] = 0;
            };
            purchasedProductsMap[productName] = purchasedProductsMap[productName] + Number(qty);  

            if (totalCost[qty] === undefined) {
            totalCost[amountEarned] = 0;  
            } 
            totalCost[amountEarned] = totalCost[amountEarned] + parseInt(amountEarned.substring(1));   
        });
    console.log(totalCost);
    console.log(purchasedProductsMap);
    return purchasedProductsMap;

}