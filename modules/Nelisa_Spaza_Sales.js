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

// exports.findMostPopularProduct = function(salesRows){
//   return "Prod2";
// }