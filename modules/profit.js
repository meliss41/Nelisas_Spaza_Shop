var totalSalesCost = require("./Nelisa_Spaza_Sales_earnings");
 var saleFileProcess = require('./sales_file_utilities');


  var totalCostsPerProductPurchasedMap = totalSalesCost.getPurchTotalCostsPerProduct('../files/NelisaPurchases.csv');
  console.log(totalCostsPerProductPurchasedMap);
  console.log('=========================================================== Above - it"s NelisaPurchases(totalCosts) map');
  var totalSalesCostPerProductMap = totalSalesCost.getHistTotalCostsPerProduct('../files/NelisaSalesHistory.csv');
  console.log(totalSalesCostPerProductMap);
  console.log('=========================================================== Above - it"s Nelisashistory map');

  var profitMap = {};
  console.log(profitMap);

	



