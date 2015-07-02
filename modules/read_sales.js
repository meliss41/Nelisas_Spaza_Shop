var fs = require('fs');

module.exports = function(fileName){
    this.getSales = function(){
        
        var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        
        //split the file into rows
        var lines = fileContent.split('\r').splice(1);
        var productsSold = {};
        lines.forEach(function(line){
            //split each line into fields
            var fields = line.split(";");
            var productName = fields[2];
            var qty = fields[3];

        //          var productsSoldMap = {
        // product: productName,
        // productsSoldQty:(qty)
        //     };

            if(productsSold[productName] === undefined){
                productsSold[productName] = 0;
                //console.log (productName);
                //productsSold.push(productName);
            };
            productsSold[productName] = productsSold[productName] + Number(qty);
            
            // if (qty) {}; 
            //console.log  (productName + ", " + qty);
           // console.log  (productName);
        });
   
        //remove the column headings
        
        console.log(productsSold);
        return productsSold;
            
    }
}