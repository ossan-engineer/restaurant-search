import React, { Component } from 'react';
import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends Component {
  render() {
    return (
      <div className='BusinessList'>
        {this.props.businesses.map(business => <Business business={business} />)}
      </div>
    );
  }
}

export default BusinessList;
