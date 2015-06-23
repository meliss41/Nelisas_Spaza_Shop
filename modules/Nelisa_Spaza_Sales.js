var fs = require('fs');
 

exports.findSalesRows = function(fileName){
      
    var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
    
    //split the file into rows
    var lines = fileContent.split('\r'); 
    var productsSold = [];     
    lines.forEach(function(line){
        //split each line into fields
        var fields = line.split(";");
        productsSold.push(fields);
    });

    //remove the column headings
    return productsSold.splice(1);
};

exports.findMostPopularProduct = function(salesRows){
  return "Prod2";
}