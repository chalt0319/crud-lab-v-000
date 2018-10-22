import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  showReviews = () => {
    return this.props.reviews.map(function (review) {
      return <Review key={review.id} review={review}/>
    })
  }

  render() {
    return (
      <ul>
        {this.showReviews()}
      </ul>
    );
  }
};

export default Reviews;
