import { combineReducers } from 'redux'
import pokemonsReducer from './pokemons'
import showItemReducer from './showItem'
import getAllTypesReducer from './getAllTypes'

export default combineReducers({
  pokemons: pokemonsReducer,
  showItem: showItemReducer,
  getAllTypes: getAllTypesReducer,
})
