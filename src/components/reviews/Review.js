import React, { Component } from 'react';

class Review extends Component {

  render() {
    // const { review } = this.props

    return (
      <span>{this.props.review} <button> X </button></span>

    );
  }

};

export default Review;
