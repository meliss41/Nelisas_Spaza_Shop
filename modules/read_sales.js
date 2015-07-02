var fs = require('fs');

module.exports = function(fileName){
    this.getSales = function(){
        
        var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        
        //split the file into rows
<<<<<<< HEAD
        var lines = fileContent.split('\r').splice(1);
        var productsSold = [];
        lines.forEach(function(line){
=======
        var lines = fileContent.split('\r').splice(1); 
        var productsSold = [];     
            lines.forEach(function(line){
            var hold = line.split(',');
            var productName = hold[2];
            var quantitySold = hold[3];
>>>>>>> 2fdee6771da44f2577a54e0784e4b711c470a70a
            //split each line into fields
        var fields = line.split(";");
        productsSold.push(fields);
        });

        //remove the column headings
        
        console.log(productsSold);
        return productsSold;
            
    }
}
        productsSold.forEach(function(){
            
        if (productMap[productName]=== undefined) {
                productNames.push(productName);
                productMap[productName]= 0;

                console.log(productNames);
        }

    });
