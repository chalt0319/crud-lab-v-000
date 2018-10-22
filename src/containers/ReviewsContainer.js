import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';


class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} restaurants={this.props.restaurants} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addReview: (review) => dispatch({ type: 'ADD_REVIEW', review}),
        deleteReview: (review) => dispatch({ type: 'DELETE_REVIEW', review})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
