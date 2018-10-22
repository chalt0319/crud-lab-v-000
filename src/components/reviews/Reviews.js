import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  showReviews = (deleteReview) => {
    return this.props.reviews.map(function (review) {
      return <Review key={review.id} review={review} deleteReview={deleteReview}/>
    })
  }

  render() {
    return (
      <ul>
        {this.showReviews(this.props.deleteReview)}
      </ul>
    );
  }
};

export default Reviews;
