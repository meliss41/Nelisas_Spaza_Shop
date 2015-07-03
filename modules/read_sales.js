    var fs = require('fs');

    module.exports = function(fileName){
        this.getSales = function(){
            
            var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
            var productsSold = {};
            //split the file into rows
            var lines = fileContent.split('\r').splice(1);
            lines.forEach(function(line){
                //split each line into fields
                var fields = line.split(";");
                var productName = fields[2];
                var qty = fields[3];
        
                if(productsSold[productName] === undefined){
                    productsSold[productName] = 0;
                };

                productsSold[productName] = productsSold[productName] + Number(qty);
                       
            });

            console.log(productsSold);
            return productsSold;
                
        }
    }