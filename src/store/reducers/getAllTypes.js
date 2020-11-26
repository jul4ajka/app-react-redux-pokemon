import {
  GET_TYPES_START,
  GET_TYPES_SUCCESS,
  GET_TYPES_ERROR,
} from '../actions/actionTypes'

const initialState = {
  allTypes: [],
}

export default function getAllTypesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TYPES_START:
      return {
        ...state,
        loading: true,
      }
    case GET_TYPES_SUCCESS:
      return {
        ...state,
        allTypes: action.allTypes,
      }
    case GET_TYPES_ERROR:
      return { ...state, error: action.e }
    default:
      return state
  }
}
