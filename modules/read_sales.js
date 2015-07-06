var fs = require('fs');

    // module.exports = function(){
        exports.getSales = function(fileName){
            
            var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
            //split the file into rows
            var lines = fileContent.split('\r').splice(1);
           console.log(lines);
           return lines;

    }
