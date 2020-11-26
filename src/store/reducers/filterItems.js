import {
  FILTER_ITEM_ERROR,
  FILTER_ITEM_ALL,
  FILTER_ITEM_SUCCESS,
} from '../actions/actionTypes'

export default function filterItemReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_ITEM_ALL:
      return {
        ...state,
        pokemonsArr: state.filtered,
      }
    case FILTER_ITEM_SUCCESS:
      return {
        ...state,
        pokemonsArr: action.filter,
      }
    case FILTER_ITEM_ERROR:
      return { ...state, error: action.e }
    default:
      return state
  }
}
