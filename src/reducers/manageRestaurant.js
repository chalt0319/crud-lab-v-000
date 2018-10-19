
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type) {
    case 'ADD_REST':

      const newRest = {
        id: cuid(),
        text: action.rest.text,
        review: action.rest.review
      }
      return {...state, restaurants: [...state.restaurants, newRest]}
    default:
      return state
  }

}
