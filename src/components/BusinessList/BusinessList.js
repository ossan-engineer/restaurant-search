import React, { Component } from 'react';
import Business from '../Business';
import './BusinessList.css';

class BusinessList extends Component {
  render() {
    return (
      <div className='BusinessList'>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;
