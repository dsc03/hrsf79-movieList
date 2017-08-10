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
      watched: false
    }
  }

  hasWatched() {
    this.setState({
      watched: !this.state.watched
    })
  }
  
  render() {
    return (
      <div>
        <rb.ListGroupItem style={movieEntryStyle} header={this.props.movie}>
          <rb.Button 
            style={{float: 'right'}} 
            bsSize="small" 
            bsStyle={this.state.watched ? "success" : "warning"}
            onClick={this.hasWatched.bind(this)}>{this.state.watched ? 'WATCHED' : 'NOT WATCHED'}
            </rb.Button>
          </rb.ListGroupItem>
      </div>
    )
  }
}

export default MovieListItem;