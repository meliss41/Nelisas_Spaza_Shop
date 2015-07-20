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

};