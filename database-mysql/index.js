var mysql = require('mysql');
var Sequelize = require('sequelize');

const sequelize = new Sequelize('movieList', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Movie = sequelize.define('movie', {
  show_id: Sequelize.NUMBER,
  show_title: Sequelize.STRING,
  release_year: Sequelize.STRING,
  runtime: Sequelize.STRING,
  rating: Sequelize.STRING
})

Movie.sync();

module.exports.Movie = Movie;



