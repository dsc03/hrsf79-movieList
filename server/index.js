var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//serve static files to client
app.use(express.static(__dirname + '/../react-client/dist'));

//parse incoming data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var port = 3000;
app.listen(port, function() {
  console.log("Listening on port:", port);
});



