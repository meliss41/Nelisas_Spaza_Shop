var fs = require('fs');
var salesFileUtilities = require('./sales_file_utilities');


exports.getSales = function(fileName){
        
      var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        //split the file into rows
      var lines = fileContent.split('\r').splice(1);
       return lines;

}

exports.getQtyPerProduct = function(salesLines){

      var productsSold = {};
    salesLines.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];
    
            if(productsSold[productName] === undefined){
                productsSold[productName] = 0;
            };

            productsSold[productName] = productsSold[productName] + Number(qty);
                   
        });
    return productsSold;

};

exports.getSalesPerProduct = function(salesLines){
	   var totalSalesPerProduct = {};
	salesLines.forEach(function(line){
        
        //split each line into fields
        var fields = line.split(";");
        var productName = fields[2];
        var qty = fields[3];
        
        var salesPrice = fields[4];
        salesPrice = salesPrice.substring(1)
        salesPrice = salesPrice.replace(",", ".");

        if(totalSalesPerProduct[productName] === undefined){
            totalSalesPerProduct[productName] = 0;
        };

        totalSalesPerProduct[productName] = totalSalesPerProduct[productName] + Number(qty) * Number(salesPrice);
               
    });
	return totalSalesPerProduct;

};

      var qtyPerCategoriesMap = {};

      var SalesPerProductsCategory = {
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


exports.getSalesPerProductsCategory = function(fields,fileName){
    var fields = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
    var qtyPerProduct = salesFileUtilities.getQtyPerProduct(fields);



  for(var productName in qtyPerProduct){
          console.log('===========================================================Below - productName');
          console.log(productName);
          var qty = qtyPerProduct[productName];
          var categoryName = SalesPerProductsCategory[productName];
      if(qtyPerCategoriesMap[categoryName] === undefined){
            qtyPerCategoriesMap[categoryName] = 0;
          };
          qtyPerCategoriesMap[categoryName] = qtyPerCategoriesMap[categoryName] + Number(qty);
        }
        console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
        console.log(qtyPerCategoriesMap);
        console.log('=========================================================== end of CategoryName + Qty PerCategory map');
        
        return qtyPerCategoriesMap;
        // var categoryName = "";
        // var qty = 0;

        // for(var key in qtyPerCategoriesMap){  
        //   var currentQty = qtyPerCategoriesMap[key]     
        //   if (currentQty > qty) {
        //     qty = currentQty;
        //     categoryName = key;
        //   };  
        // }
  
        // console.log(categoryName +','+ qty);
        // return currentQty
        // var categoryName = "";
        // var salesPrice = 0;

        // for(var key in qtyPerCategoriesMap){  
        //   var currentSalesPrice = qtyPerCategoriesMap[key]     
        //   if (currentSalesPrice > salesPrice) {
        //     salesPrice = currentSalesPrice;
        //     categoryName = key;
        //   };  
        // }
  
        // console.log(qtyPerCategoriesMap +','+ salesPrice);
        // console.log('=========================================================== Above - Most popular categoryName + qty');
        //return qtyPerCategoriesMap 
}


