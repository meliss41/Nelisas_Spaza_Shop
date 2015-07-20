    var salesCategoriesUtility = require('./Nelisa_Spaza_Sales'); 
    var salesFileUtilities = require('./sales_file_utilities');
	exports.findSalesEarningsRows = function(fileName){

		var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
		var earningsPerProducts = salesFileUtilities.getQtyPerProduct(sales);
		console.log('===========================================================below - Purchased products');
		//console.log(sales);
        console.log('=========================================================== above - Purchased products are hidden')

};
		
exports.getStockedProducts = function(salesLines){
        var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
        var purchasedProducts = salesFileUtilities.getQtyPerProduct(sales);

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

exports.getEarningsPerCategory = function(fileName){
        var sales = salesFileUtilities.getSales(fileName);
        var qtyPerProductEarnings = salesCategoriesUtility.findMostPopularCategory(sales);

        console.log(sales);
        return sales;

    }

 exports.getTotalCostPerProduct = function(salesLines){

         var sales = salesFileUtilities.getSales("./files/NelisaPurchases.csv");
         var productsSold = salesFileUtilities.getQtyPerProduct(sales);
         //var totalCost = {};
         var totalProductPurchasedMap = {};
     sales.forEach(function(line){
             //split each line into fields
            var fields = line.split(";");
             var productName = fields[2];
             var qty = fields[3];
             var productPrice = fields[5];
             productPrice = productPrice.substring(1);
             productPrice = productPrice.replace(",", ".");
             
    
             if(totalProductPurchasedMap[productName] === undefined){
                 totalProductPurchasedMap[productName] = 0;
             };
             totalProductPurchasedMap[productName] += Number(productPrice);  
                });
          //    //if (totalCost[qty] === undefined) {
          //     totalCost[productName] = 0;  
          //     } 
          //     totalCost[productName] += parseInt(productPrice.substring(1));   
          // });
     //console.log(totalCost);
       console.log(totalProductPurchasedMap);
     return totalProductPurchasedMap;

 };