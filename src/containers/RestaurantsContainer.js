import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRest}/>
        <Restaurants restaurants={this.props.restaurants} reviews={this.props.reviews} deleteRest={this.props.deleteRest}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addRest: (rest) => dispatch({ type: 'ADD_REST', rest}),
        deleteRest: (rest) => dispatch({ type: 'DELETE_REST', rest})
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
