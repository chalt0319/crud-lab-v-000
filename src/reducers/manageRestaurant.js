
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
      console.log(findName)

      const newReview = {
        id: cuid(),
        text: action.review.text,
        restaurantId: findName[0].id
      }
      console.log(newReview)
      return {...state, reviews: [...state.reviews, newReview]}

      case 'DELETE_REST':

      const deleteRest = state.restaurants.filter(function (rest) {
        return rest.id !== action.rest.id
      })
      return {...state, restaurants: deleteRest}


    default:
      return state
  }

}
