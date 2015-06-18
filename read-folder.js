   var findLines = function(folderName){
     var fs = require('fs');
     var filesInFolder = fs.readdirSync(folderName);//read folder
      var linesInFiles = [];//list to store your stuff
          filesInFolder.forEach(function(fileName){
       var fileContent = fs.readFileSync('./files/week1/' + fileName, "utf8");//read files in folder
       var lines = fileContent.split('\n');//split to display files on a new line
           lines.forEach(function(line){
            linesInFiles.push(line);//push lines in the files to list you created
  });

});
    console.log(linesInFiles);
     return linesInFiles;// return lines in files
}

   exports.linesInFilesAsync = function(folderName, callback) {
    var linesInFiles = findLines(folderName);
        callback(null, linesInFiles);
};

 exports.linesInFiles = function(folderName){
 var linesInFiles = findLines(folderName);
     //console.log(linesInFiles);
    return linesInFiles;

};

