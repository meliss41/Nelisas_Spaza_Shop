<<<<<<< HEAD
var fs = require('fs');
var productsSold = [];     

exports.findMostPopularProduct = function(salesFileReader){
    var productNames =[];
    var productMap = {};
    var soldItemsMap = {};
    var quantitySold = [];

    var sales = salesFileReader.getSales();
    
    console.log('===========================================================')
    console.log('===========================================================')
    console.log('===========================================================')
    console.log(sales)

}
=======
  var fs = require('fs');
  exports.findSalesRows = function(fileName){
        
      var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
      
      //split the file into rows
      var lines = fileContent.split('\r').splice(1); 
      var productsSold = [];     
      lines.forEach(function(line){
          //split each line into fields
          var fields = line.split(";");
          productsSold.push(fields);
      });

      //remove the column headings
      console.log(productsSold);
      return productsSold;

  };

  this.findMostPopularProduct = function(salesRows){
    var fileContent = fs.readFileSync('./files/NelisaSalesHistory.csv', "utf8");//read files in folder
      
      //split the file into rows
      var lines = fileContent.split('\r').splice(1); 
      var productList = [];     
      
  lines.forEach(function(fileLines){

        var product = fileLines.split(';');
     //To chose a column of items to show by indexing   
        var currentItem = product[2];
        var productTotal = product[3];

        var productMap = {
          itemName : currentItem,
          soldItems : Number(productTotal)
        };
        productList.push(productMap);
        });

      return productList;
    };

        // return "Prod2";
>>>>>>> 8554fef174bd765a43fbbec781a768466dea8c4d
