var assert = require("assert");
var readFolder = require('../modules/productsSold');

    describe("Find lines in files", function(){

    it('should find the lines syncronously', function(){
       
        assert.equal(449, readFolder.findLines('../files/NelisaSalesHistory.csv'));
    });

    it('should find the lines asyncronously', function(){
        readFolder.linesInFilesAsync('../files/NelisaSalesHistory.csv', function(err, results){
            assert.equal(11, results);
            
                  });
            });
        });