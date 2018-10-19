import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class RestaurantInput extends Component {

  state = {
    text: "",
    review: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRest(this.state)
    this.setState({
      text: "",
      review: ""
    })
  }

  handleReview = (review) => {
    this.setState({
      review: review
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant: </label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <ReviewInput handleReview={this.handleReview} newValue={this.state.review}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
