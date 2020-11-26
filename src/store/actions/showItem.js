import {
  SHOW_ITEM_START,
  SHOW_ITEM_SUCCESS,
  SHOW_ITEM_ERROR,
} from '../actions/actionTypes'

export default function showItem(url) {
  return async dispatch => {
    dispatch(showItemStart())
    try {
      let response = await fetch(url)
      let pokemon = await response.json()
      let showPokemon = true
      dispatch(showItemSuccess(pokemon, showPokemon))
    } catch (e) {
      dispatch(showItemError(e))
    }
  }
}

export function showItemStart() {
  return {
    type: SHOW_ITEM_START,
  }
}

export function showItemSuccess(pokemon, showPokemon) {
  return {
    type: SHOW_ITEM_SUCCESS,
    pokemon: pokemon,
    showPokemon: showPokemon,
  }
}

export function showItemError(e) {
  return {
    type: SHOW_ITEM_ERROR,
    error: e,
  }
}
