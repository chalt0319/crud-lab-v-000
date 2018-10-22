import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import Restaurants from './Restaurants'
import Review from '../reviews/Review'

class Restaurant extends Component {


  findReviews = (rest) => {
      return this.props.reviews.filter(function (review) {
        return review.restaurantId === rest.id
    })
  }

  showReviews = (rest) => {
    return this.findReviews(rest).map(function (review) {
      return <li key={review.id}>{review.text} - <button> X </button></li>
    })
  }

  handleClick = () => {
    this.props.deleteRest(this.props.rest)
  }

  render() {
    // const { restaurant } = this.props;
    return (
        <li>
          <span>{this.props.rest.text} </span><button onClick={this.handleClick}> X </button>
          <ul>
            {this.showReviews(this.props.rest)}
          </ul>
        </li>
    );
  }
};

export default Restaurant;
