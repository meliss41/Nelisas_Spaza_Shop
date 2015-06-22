     var fs = require('fs');
 exports.findLines = function(fileName){
     
       
       var fileContent = fs.readFileSync(fileName, "utf8");//read files in folder
       var lines = fileContent.split('\r');//split to display files on a new line
           lines.forEach(function(line){
            // linesInFiles.push(line);//push lines in the files to list you created
  });


    console.log(lines);
     return lines.length;// return lines in files
};

   exports.linesInFilesAsync = function(fileName, results) {
    var linesInFiles = fs.readFile(fileName);
        results =  linesInFiles;
        return linesInFiles;

};

//  exports.linesInFiles = function(fileName){
//  var linesInFiles = findLines(fileName);
//      //console.log(linesInFiles);
//     return linesInFiles;
// };
