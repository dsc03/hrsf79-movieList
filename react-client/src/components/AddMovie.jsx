import React from 'react';
import reactDOM from 'react-dom';
import * as rb from 'react-bootstrap';
import $ from 'jquery';
import MovieData from '../../../fakeData.js'

var addMovieStyle = {
  margin: '15px'
}

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      movieToAdd: ''  
    }
  }
  
  handleMovieChange(e) {
    this.setState({
      movieToAdd: e.target.value
    })
  }
  
  onAdd() {
    var movieAddedAlready = false;
    for (var i = 0; i < MovieData.length; i++) {
      if (MovieData[i].title === this.state.movieToAdd) {
        movieAddedAlready = true;
      }
    }
    
    if (!movieAddedAlready) {
      MovieData.push({title: this.state.movieToAdd});
    }
    
  }
  
  render() {
    return (
      <div>
        <rb.Grid>
          <rb.Row>
            <rb.Col md={6}>
              <rb.Form style={addMovieStyle} inline>
                <rb.FormControl 
                type="text"
                value={this.state.movieToAdd}
                placeholder="Add a Movie..."
                onChange={this.handleMovieChange.bind(this)}
                ></rb.FormControl>
                <rb.Button type="button" bsStyle="success" onClick={this.onAdd.bind(this)}>Add</rb.Button>
              </rb.Form>
            </rb.Col>
          </rb.Row>
        </rb.Grid>
      </div>      
    )
  }
}

export default AddMovie;