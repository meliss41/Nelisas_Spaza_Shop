
 var findLines = function(fileName){
     var fs = require('fs');
     var filesInFolder = fs.readFileSync(fileName);//read folder
      var linesInFiles = [];//list to store your stuff
          filesInFolder.forEach(function(fileName){
       var fileContent = fs.readFileSync('fileName', "utf8");//read files in folder
       var lines = fileContent.split('\n');//split to display files on a new line
           lines.forEach(function(line){
            linesInFiles.push(line);//push lines in the files to list you created
  });

});
    console.log(linesInFiles);
     return linesInFiles;// return lines in files
};

   exports.linesInFilesAsync = function(fileName, callback) {
    var linesInFiles = findLines(fileName);
        callback(null, linesInFiles);
};

 exports.linesInFiles = function(fileName){
 var linesInFiles = findLines(fileName);
     //console.log(linesInFiles);
    return linesInFiles;
};
