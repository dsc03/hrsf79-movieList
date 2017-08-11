var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/moviesdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected')
});


var movieSchema = mongoose.Schema({
  show_id: Number,
  show_title: String,
  release_year: String,
  runtime: String,
  rating: String
})

var Movie = mongoose.model('Movie', movieSchema);


let findMovie = function(movie, callback) {
  Movie.find({show_title: movie}, function(err, data) {
    if (err) {
      throw err;
    } else {
      callback(data);
    }
  });
}

let save = function(movie) {
  var row = new Movie({
    id: movie.show_id, 
    show_title: movie.show_title, 
    release_year: movie.release_year, 
    runtime: movie.runtime,
    rating: movie.rating,
  });
  row.save();
};

module.exports.findMovie = findMovie;
module.exports.save = save;;