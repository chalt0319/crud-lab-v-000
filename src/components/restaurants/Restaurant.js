import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer'
// import Restaurants from './Restaurants'
// import Review from '../reviews/Review'

class Restaurant extends Component {


  findReviews = (rest) => {
      return this.props.reviews.filter(function (review) {
        return review.restaurantId === rest.id
    })
  }

  showReviews = (rest) => {
    return this.findReviews(rest).map(function (review) {
      return <li key={review.id}>{review.text}</li>
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
//
//
// import React, { Component } from 'react';
// import ReviewsContainer from '../../containers/ReviewsContainer'
// import Restaurants from './Restaurants'
// import Review from '../reviews/Review'
//
// class Restaurant extends Component {
//
//
//   findReviews = (rest) => {
//       return this.props.reviews.filter(function (review) {
//         return review.restaurantId === rest.id
//     })
//   }
//
//   showReviews = (rest, handleClick2) => {
//     return this.findReviews(rest).map(function (review) {
//       return <li key={review.id}>{review.text} - <button onClick={handleClick2(review)}> X </button></li>
//     })
//   }
//
//   handleClick2 = (review) => {
//     this.props.deleteReview(review)
//   }
//
//   handleClick = () => {
//     this.props.deleteRest(this.props.rest)
//   }
//
//   render() {
//     // const { restaurant } = this.props;
//     return (
//         <li>
//           <span>{this.props.rest.text} </span><button onClick={this.handleClick}> X </button>
//           <ul>
//             {this.showReviews(this.props.rest, this.handleClick2)}
//           </ul>
//         </li>
//     );
//   }
// };
//
// export default Restaurant;
