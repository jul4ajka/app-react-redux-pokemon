import {
  SHOW_ITEM_ERROR,
  SHOW_ITEM_START,
  SHOW_ITEM_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  pokemonsArr: [],
  initialArr: 'https://pokeapi.co/api/v2/pokemon?limit=12',
  pokemonInfo: {},
  showPokemon: false,
  filtered: [],
  allTypes: [],
  loading: true,
}

export default function showItemReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ITEM_START:
      return {
        ...state,
        loading: true,
      }
    case SHOW_ITEM_SUCCESS:
      return {
        ...state,
        pokemonInfo: action.pokemon,
        showPokemon: action.showPokemon,
      }
    case SHOW_ITEM_ERROR:
      return { ...state, loading: false, error: action.e }
    default:
      return state
  }
}
