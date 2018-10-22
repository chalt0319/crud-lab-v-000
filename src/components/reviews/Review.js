import React, { Component } from 'react';

class Review extends Component {

  handleClick = () => {
    this.props.deleteReview(this.props.review)
  }

  render() {
    // const { review } = this.props
    return (
      <li>
        <span>{this.props.review.text} - {this.props.review.restaurant} <button onClick={this.handleClick}> X </button></span>
      </li>
    );
  }

};

export default Review;
