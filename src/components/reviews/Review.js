import React, { Component } from 'react';

class Review extends Component {

  render() {
    // const { review } = this.props

    return (
      <li>
        <span>{this.props.review.text} <button> X </button></span>
      </li>
    );
  }

};

export default Review;
