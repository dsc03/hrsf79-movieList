import React from 'react';
import reactDOM from 'react-dom';
import $ from 'jquery';
import * as rb from 'react-bootstrap';
import MovieListItem from './MovieListItem.jsx';

var counter = 0; //key for each movie

class MovieList extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <rb.ListGroup>
          {typeof this.props.movies[0] === 'string' ? <MovieListItem movie={this.props.movies[0]}></MovieListItem> : this.props.movies.map((movie) => 
            <MovieListItem key={counter++} movie={movie.title}></MovieListItem>  
          )}
        </rb.ListGroup>
      </div>
    )
  }
}

export default MovieList;

