var fs = require('fs');

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

    var qtyPerCategoryMap = {};

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


exports.getSalesPerProductsCategory = function(salesLines){

    for(var productName in qtyPerProduct){
          console.log('===========================================================Below - productName');
          console.log(productName);
          var qty = qtyPerProduct[productName];
          var categoryName = SalesPerProductsCategory[productName];
          console.log('===========================================================Popular categoryName - Below');
          console.log(categoryName);

          if(qtyPerCategoryMap[categoryName] === undefined){
            qtyPerCategoryMap[categoryName] = 0;
          };
          qtyPerCategoryMap[categoryName] = qtyPerCategoryMap[categoryName] + Number(qty) * Number(salesPrice);;
        }
        console.log('=========================================================== below - Popular CategoryName + Qty PerCategory map');
        console.log(qtyPerCategoryMap);
        console.log('=========================================================== end of CategoryName + Qty PerCategory map');
        

        var categoryName = "";
        var qty = 0;

        for(var key in qtyPerCategoryMap){  
          var currentQty = qtyPerCategoryMap[key]     
          if (currentQty > qty) {
            qty = currentQty;
            categoryName = key;
          };  
        }
  
        console.log(categoryName +','+ qty);
        console.log('=========================================================== Above - Most popular categoryName + qty');

}


