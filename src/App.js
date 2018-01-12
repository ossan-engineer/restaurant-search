import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import './App.css';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div className='App'>
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
