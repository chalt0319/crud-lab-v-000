
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_REST':

      const newRest = {
        id: cuid(),
        text: action.rest.text
      }
      return {...state, restaurants: [...state.restaurants, newRest]}

    case 'ADD_REVIEW':

      const findName = state.restaurants.filter(function (rest) {
        return rest.text === action.review.restaurantName
      })

      const newReview = {
        id: cuid(),
        text: action.review.text,
        restaurant: findName[0].text,
        restaurantId: findName[0].id
      }
      return {...state, reviews: [...state.reviews, newReview]}

    case 'DELETE_REST':

      const deleteRest = state.restaurants.filter(function (rest) {
        return rest.id !== action.rest.id
      })
      return {...state, restaurants: deleteRest}

    case 'DELETE_REVIEW':

      const deleteReview = state.reviews.filter(function (review) {
        return review.id !== action.review.id
      })
      return {...state, reviews: deleteReview}


    default:
      return state
  }

}
