//modules ill be using
var fs = require('fs');
var csv = require('csv');

csv().from.path('files/info.txt', { delimiter: '  '})
.to.array(function(data){
    console.log(data);
});

fs = require('fs')
fs.readFile('files/info.txt', 'utf8', function (err, csvdata) {
  if (err) {
    return console.log(err);
  }
  var movies = csvdata.replace(/\s+/g, "\t");

  csv().from.string(moviews, { delimiter: '\t'})
    .to.array(function(data){
        console.log(data);
    });

});