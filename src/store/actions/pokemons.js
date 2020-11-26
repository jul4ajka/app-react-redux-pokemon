import {
  FETCH_POKEMONS_START,
  FETCH_POKEMONS_SUCCESS,
  FETCH_POKEMONS_ERROR,
} from '../actions/actionTypes'

export default function fetchPokemons(url) {
  return async dispatch => {
    dispatch(fetchPokemonsStart())
    try {
      let response = await fetch(url)
      let pokemons = await response.json()
      const nextArr = pokemons.next

      for (let i = 0; i < pokemons.results.length; i++) {
        let response = await fetch(pokemons.results[i].url)
        let sprites = await response.json()

        pokemons.results[i].image = sprites.sprites.front_default
        pokemons.results[i].types = sprites.types
      }
      dispatch(fetchPokemonsSuccess(nextArr, pokemons.results))
    } catch (e) {
      dispatch(fetchPokemonsError(e))
    }
  }
}

export function fetchPokemonsStart() {
  return {
    type: FETCH_POKEMONS_START,
  }
}

export function fetchPokemonsSuccess(nextArr, pokemonsResults) {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    nextArr: nextArr,
    pokemonsArr: pokemonsResults,
  }
}

export function fetchPokemonsError(e) {
  return {
    type: FETCH_POKEMONS_ERROR,
    error: e,
  }
}
