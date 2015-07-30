var totalSalesCost = require("./Nelisa_Spaza_Sales_earnings");
saleFileProcess = require('./sales_file_utilities');
// //var totalPurchSalesCost = require()
// ??? sales
// 	var totalHistSalesCost = totalSalesCost.getHistTotalCostsPerProduct(sales);
// 	console.log(totalSalesCost);

// ??? purchases
// 	var totalPurchSalesCost = totalSalesCost.getPurchTotalCostsPerProduct(purchases);
// 	console.log(totalPurchSalesCost);
exports.getPurchTotalCostsPerProduct = function(fileName,salesLines){

	var salesLines = saleFileProcess.getSales(fileName);
	// console.log(salesLines);
  	var totalSalesPerProduct = totalSalesCost.getPurchTotalCostsPerProduct(salesLines);
    console.log(salesLines);

    console.log('=========================================================== below - salesRows are hidden');
    return salesLines;
    console.log('=========================================================== Above - salesRows are hiden');
	
	};



