import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  showRests = (reviews, deleteRest) => {
    return this.props.restaurants.map(function (rest) {
      return <Restaurant key={rest.id} rest={rest} reviews={reviews} deleteRest={deleteRest}/>
    })
  }

  render() {
    return(
      <ul>
        {this.showRests(this.props.reviews, this.props.deleteRest)}
      </ul>
    );
  }
};

export default Restaurants;
