import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
  }

  getSortByClass = (sortByOption) => {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  };

  handleSortByChange = (sortByOption) => {
    this.setState({
      sortBy: sortByOption,
    });
  };

  handleTermChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];

      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={() => this.handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className='SearchBar-fields'>
          <input
            placeholder='Search Businesses'
            onChange={event => this.handleTermChange(event)}
          />
          <input
            placeholder='Where?'
            onChange={event => this.handleLocationChange(event)}
          />
        </div>
        <div className='SearchBar-submit'>
          <a onClick={this.handleSearch}>Let&apos;s Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
