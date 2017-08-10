import React from 'react';
import reactDOM from 'react-dom';
import * as rb from 'react-bootstrap';
import $ from 'jquery';

var searchStyle = {
  float: 'left'
}

class Search extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      searchTerm: ''
    }
  }
  
  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }
  
  search() {
    this.props.onSearch(this.state.searchTerm);  
  } 
   
  render() {
    return (
      <div>
        <rb.Grid>
          <rb.Row>
            <rb.Col md={4}>
              <rb.Form inline>
                <rb.FormControl
                  type="text" 
                  value={this.state.searchTerm} 
                  placeholder="Search..."
                  onChange={this.handleChange.bind(this)}>
                </rb.FormControl>
                <rb.Button type="button" bsStyle="info" onClick={this.search.bind(this)}>Submit</rb.Button>
              </rb.Form>
            </rb.Col>
          </rb.Row>
        </rb.Grid>
      </div> 
    )
  }
}

export default Search;
