var fs = require('fs');

module.exports = function(fileName){
    this.getSales = function(){
        
        var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        
        //split the file into rows
        var lines = fileContent.split('\r').splice(1); 
        var productsSold = [];     
            lines.forEach(function(line){
            var hold = line.split(',');
            var productName = hold[2];
            var quantitySold = hold[3];
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