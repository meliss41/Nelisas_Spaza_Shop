var fs = require('fs');

exports.getSales = function(fileName){        
        var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
        //split the file into rows
        var lines = fileContent.split('\r').splice(1);
       console.log(lines);
       return lines;

}

exports.getProducts = function(salesLines){

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

}
