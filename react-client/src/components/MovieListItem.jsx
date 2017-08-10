import React from 'react';
import reactDOM from 'react-dom';
import * as rb from 'react-bootstrap';

var movieEntryStyle = {
  margin: '15px'
}

class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render() {
    return (
      <div>
        <rb.ListGroupItem style={movieEntryStyle} header={this.props.movie}></rb.ListGroupItem>
      </div>
    )
  }
}

export default MovieListItem;