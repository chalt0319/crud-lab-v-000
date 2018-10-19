import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  showRests = () => {
    return this.props.restaurants.map(function (rest) {
      return <Restaurant key={rest.text} rest={rest}/>
    })
  }
  render() {
    return(
      <ul>
        {this.showRests()}
      </ul>
    );
  }
};

export default Restaurants;
