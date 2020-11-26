import { LOAD_MORE_POKEMONS, LOAD_MORE_ERROR } from '../actions/actionTypes'

export default function loadMorePokemons(url) {
  return async dispatch => {
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
      dispatch(loadMorePokemonsSuccess(nextArr, pokemons.results))
    } catch (e) {
      dispatch(loadMoreError(e))
    }
  }
}

export function loadMorePokemonsSuccess(nextArr, pokemonsArr) {
  return {
    type: LOAD_MORE_POKEMONS,
    pokemonsArr,
    nextArr,
  }
}

export function loadMoreError(e) {
  return {
    type: LOAD_MORE_ERROR,
    error: e,
  }
}
