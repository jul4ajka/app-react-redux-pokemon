import {
  FETCH_POKEMONS_ERROR,
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
} from '../actions/actionTypes'

import { FILTER_ITEM_SUCCESS, FILTER_ITEM_ERROR } from '../actions/actionTypes'

const initialState = {
  pokemonsArr: [],
  pokemonsCopy: [],
  initialArr: 'https://pokeapi.co/api/v2/pokemon?limit=12',
  pokemonInfo: {},
  showPokemon: false,
  allTypes: [],
  loading: true,
}

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMONS_START:
      return {
        ...state,
        loading: true,
      }
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        nextArr: action.nextArr,
        loading: false,
        pokemonsArr:
          action.pokemonsArr || state.pokemonsCopy.concat(action.pokemonsArr),
        pokemonsCopy: state.pokemonsCopy.concat(action.pokemonsArr),
      }
    case FETCH_POKEMONS_ERROR:
      return { ...state, loading: false, error: action.e }
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
