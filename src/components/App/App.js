import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';
import './App.css';

class App extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
  }

  searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy)
      .then((businesses) => {
        console.log(businesses);
        this.setState({
          businesses,
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
