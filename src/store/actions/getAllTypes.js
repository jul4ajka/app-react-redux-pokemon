import {
  GET_TYPES_START,
  GET_TYPES_SUCCESS,
  GET_TYPES_ERROR,
} from '../actions/actionTypes'

export default function getAllTypes() {
  return async dispatch => {
    dispatch(getAllTypesStart())
    try {
      let response = await fetch('https://pokeapi.co/api/v2/type/?limit=999')
      let types = await response.json()

      dispatch(getAllTypesSuccess(types.results))
    } catch (e) {
      dispatch(getAllTypesError(e))
    }
  }
}

export function getAllTypesStart() {
  return {
    type: GET_TYPES_START,
  }
}

export function getAllTypesSuccess(allTypes) {
  return {
    type: GET_TYPES_SUCCESS,
    allTypes: allTypes,
  }
}

export function getAllTypesError(e) {
  return {
    type: GET_TYPES_ERROR,
    error: e,
  }
}
