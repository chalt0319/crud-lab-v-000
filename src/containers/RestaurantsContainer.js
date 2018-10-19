import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRest={this.props.addRest}/>
        <Restaurants restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
    return {
        addRest: (rest) => dispatch({ type: 'ADD_REST', rest})
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
