import { FILTER_ITEM_SUCCESS, FILTER_ITEM_ERROR } from '../actions/actionTypes'
import { store } from '../../index'

export default function filterItems(event) {
  return async dispatch => {
    try {
      let value = event.target.value

      if (value === 'Select all') {
        let filter = store.getState().pokemons.pokemonsCopy
        dispatch(filterItemsSuccess(filter))
      } else {
        let filter = store
          .getState()
          .pokemons.pokemonsCopy.filter(pokemon =>
            pokemon.types.length === 1
              ? pokemon.types[0].type.name === value.toLowerCase()
              : pokemon.types[0].type.name === value.toLowerCase() ||
                pokemon.types[1].type.name === value.toLowerCase()
          )
        dispatch(filterItemsSuccess(filter))
      }
    } catch (e) {
      dispatch(filterItemsError(e))
    }
  }
}

export function filterItemsSuccess(filter) {
  return {
    type: FILTER_ITEM_SUCCESS,
    filter,
  }
}

export function filterItemsError(e) {
  return {
    type: FILTER_ITEM_ERROR,
    error: e,
  }
}
