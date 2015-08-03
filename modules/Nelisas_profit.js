var totalSalesCost = require("./Nelisa_Spaza_Sales_earnings");
var saleFileProcess = require('./sales_file_utilities');
var profitPerProduct = require('./Nelisas_profit')
var purchasesFile = './files/NelisaPurchases.csv';
var salesFile = './files/NelisaSalesHistory.csv';

var totalCostsPerProductPurchasedMap = totalSalesCost.getPurchTotalCostsPerProduct(purchasesFile);
var totalSalesCostPerProductMap = totalSalesCost.getHistTotalCostsPerProduct(salesFile);

	var profitMap = {};

exports.getProfitPerProducts = function(salesFile,purchasesFile){
 	

  	for(productName in totalCostsPerProductPurchasedMap){
  	var totalProfit = totalSalesCostPerProductMap[productName] - totalCostsPerProductPurchasedMap[productName]	
			profitMap[productName] = totalProfit;
			};
	//console.log(profitMap);
	return (profitMap);	

 	};
 exports.getMosprofitableProduct = function(profitMap){
 	var profitPerProdMap = profitPerProduct.getProfitPerProducts(profitMap);
 	console.log(profitPerProdMap);

 	var productName = "";
    var profitPricePerProduct = 0;

    for(var key in profitPerProdMap){
        var currentPrice = profitPerProdMap[key] ;
        if (currentPrice > profitPricePerProduct) {
            profitPricePerProduct = currentPrice;
            productName = key;
        };
    }
    console.log('=========================================================== above - Purchased products are hidden')
    console.log("{productName: " + productName + " , profit: " + profitPricePerProduct +"}");
    console.log('=========================================================== above - Purchased products are hidden')

    return {
        productName:productName,
        profit:profitPricePerProduct
    };
 }