import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  // state = {
  //   text: ""
  // }

  handleChange = (e) => {
    // this.setState({
    //   text: e.target.value
    // })
    this.props.handleReview(e.target.value)
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.props.addReview(this.state)
  //   this.setState({
  //     text: ""
  //   })
  // }

  render() {
    return (
      <div>

        <label>Add Review: </label>
        <input onChange={this.handleChange} type="text" value={this.props.newValue}/>

      </div>
    );
  }
};

export default ReviewInput;

// <form onSubmit={this.handleSubmit}>
//   <input type="submit"/>
// </form>
