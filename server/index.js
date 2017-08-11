var express = require('express');
var bodyParser = require('body-parser');
var apiHelper = require('../Helpers/getMovieInfoFromAPI.js');
var dbHelpers = require('../database-mongo/index.js');


var app = express();

//serve static files to client
app.use(express.static(__dirname + '/../react-client/dist'));

//parse incoming data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/search', function(req, res) {
  
  dbHelpers.findMovie(req.body.title, function(data) {
    if (data.length !== 0) { //if data exists in db
      res.send(data);
      
    } else {
      apiHelper.getMovieInfoFromAPI(req.body.title, function(movie) {
        dbHelpers.save(movie);
        res.send(movie);
      })
      
    }
  })
}); 

var port = 3000;
app.listen(port, function() {
  console.log("Listening on port:", port);
});



