
    var salesFileUtilities = require('./sales_file_utilities');

exports.findMostPopularProduct = function(salesFileReader){

      var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
      var productsSold = salesFileUtilities.getProducts(sales);

      var productName = "";
      var qty = 0;

      for(var key in productsSold){  
        var currentQty = productsSold[key]     
        if (currentQty > qty) {
            qty = currentQty;
            productName = key;
        };
      }

      console.log(productName +','+ qty);
      console.log('===========================================================Above productName & qty');
      return {
          productName:productName,
          qty:qty
      };

    }

exports.getSalesPerProduct = function(salesRows){

      salesRows = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
      var productsSold = salesFileUtilities.getProducts(salesRows);
        // console.log(salesRows);
        console.log('===========================================================Above salesRows are hidden');
        return salesRows;
        // console.log('===========================================================salesRows are hiden');

      };

      
      var qtyPerCategoryMap = {};

      var productCategories = {
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

  exports.findMostPopularCategory = function(salesFileReader){

        var salesFileReader = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
        var qtyPerProduct = salesFileUtilities.getProducts(salesFileReader);

        for(var productName in qtyPerProduct){
          console.log('===========================================================Below - productName');
          console.log(productName);
          var qty = qtyPerProduct[productName];
          var categoryName = productCategories[productName];
          console.log('===========================================================Popular categoryName - Below');
          console.log(categoryName);

          if(qtyPerCategoryMap[categoryName] === undefined){
            qtyPerCategoryMap[categoryName] = 0;
          };
          qtyPerCategoryMap[categoryName] = qtyPerCategoryMap[categoryName] + Number(qty);
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
        return {
          categoryName: categoryName,
          qty:qty
        };
      }

  exports.findLeastPopularProduct = function(salesFileReader){

      var sales = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
      var productsSold = salesFileUtilities.getProducts(sales);

      var productName = "";
      var qty = 10000000;

      for(var key in productsSold){  
        var currentQty = productsSold[key]     
        if (currentQty < qty) {
            qty = currentQty;
            productName = key;
        };
      }
      console.log('===========================================================Above productName & qty');
      console.log(productName +','+ qty);
      return {
          productName:productName,
          qty:qty
      };

    }

  exports.findLeastPopularCategory = function(salesFileReader){

        var salesFileReader = salesFileUtilities.getSales("./files/NelisaSalesHistory.csv");
        var qtyPerProduct = salesFileUtilities.getProducts(salesFileReader);

        for(var productName in qtyPerProduct){
          console.log('===========================================================Below - productName');
          console.log(productName);
          var qty = qtyPerProduct[productName];
          var categoryName = productCategories[productName];
          console.log('=========================================================== categoryName - Below');
          console.log(categoryName);

        
        
          if(qtyPerCategoryMap[categoryName] === undefined){
             qtyPerCategoryMap[categoryName] = 0;
          };
        }
        console.log('=========================================================== below - CategoryName + Qty PerCategory map');
        console.log(qtyPerCategoryMap);
        var categoryName = "";
        var qty = 10000000;

        for(var key in qtyPerCategoryMap){
          var currentQty = qtyPerCategoryMap[key];
          //
          if (currentQty < qty) {
            qty = currentQty;
            categoryName = key;
          };
        }
        console.log('=========================================================== end of CategoryName + Qty PerCategory map');
        console.log(categoryName +','+ qty);
        console.log('=========================================================== Above - Least categoryName + qty');
        //console.log(productCategories);
        return {
          categoryName: categoryName,
          qty:qty
        };  
      }




