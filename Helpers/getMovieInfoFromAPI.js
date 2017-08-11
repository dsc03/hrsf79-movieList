var request = require('request');


var getMovieInfoFromAPI = function(searchTerm, callback) {
  var options = {
    url: 'http://netflixroulette.net/api/api.php?title=' + searchTerm
  }
  
  request.get(options, function(err, res, body) {
    if (err) {
      throw err;
    } else {
      callback(JSON.parse(body))
    }
  })
}

module.exports.getMovieInfoFromAPI = getMovieInfoFromAPI;