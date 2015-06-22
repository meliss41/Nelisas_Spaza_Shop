var assert = require("assert");


    describe("Find lines in files", function(){

    it('should find the lines syncronously', function(){
        var readFolder = require('../productsSold');
        assert.equal(11, readFolder.linesInFiles('../files/NelisaSalesHistory.csv').length);
    });

    it('should find the lines asyncronously', function(done){
        var readFolder = require('../productsSold');
        readFolder.linesInFilesAsync('../files/NelisaSalesHistory.csv', function(err, entries){
            assert.equal(11, entries.length);
            done();
                  });
            });
        });