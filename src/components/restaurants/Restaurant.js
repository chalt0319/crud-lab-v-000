import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import Restaurants from './Restaurants'
import Review from '../reviews/Review'

class Restaurant extends Component {


  render() {
    // const { restaurant } = this.props;

    return (
      <div>
        <li>
          <span>{this.props.rest.text} </span><button> X </button>
          <ul>
            <li><Review review={this.props.rest.review}/></li>
          </ul>
        </li>
      </div>
    );
  }
};

export default Restaurant;

// <ReviewsContainer restaurant={restaurant}/>
