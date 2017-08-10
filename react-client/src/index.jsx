import React from 'react';
import reactDOM from 'react-dom';
import * as rb from 'react-bootstrap';
import $ from 'jquery';
import MovieList from './components/MovieList.jsx';
import MovieListItem from './components/MovieListItem.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
import MovieData from '../../fakeData.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      movies: []
    }
  }
  
  onSearch(movie) {
    var movieArr = [];

    for (var i = 0; i < MovieData.length; i++) {
      if (MovieData[i].title.includes(movie)) {
        movieArr.push(MovieData[i]);
      }
    }

    if (movieArr.length === 0) { //if no matches were found
      movieArr = ['Oops! We do not have this movie!']; 
    }
    
    this.setState({
      movies: movieArr
    })
  }
  
  render() {
    return (
      <div>
        <rb.PageHeader>Welcome to MovieList</rb.PageHeader>
        <AddMovie></AddMovie>
        <Search onSearch={this.onSearch.bind(this)}></Search>
        <MovieList movies={this.state.movies}>
        </MovieList>
      </div>
    )
  }
}

reactDOM.render(<App />, document.getElementById("app"));