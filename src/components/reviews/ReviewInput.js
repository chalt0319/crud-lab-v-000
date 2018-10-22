import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantName: ""
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleName = (e) => {
    this.setState({
      restaurantName: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: "",
      restaurantName: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review: </label>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <label>Restaurant Name: </label>
          <input onChange={this.handleName} type="text" value={this.state.restaurantName}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
