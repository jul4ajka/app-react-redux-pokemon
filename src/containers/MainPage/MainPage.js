import React, { Component } from 'react'
import './MainPage.css'
import { MAIN_PAGE_IMAGE } from '../../configs/index'

class MainPage extends Component {
  render() {
    return (
      <div className='MainPage'>
        <h1>Pokemons App</h1>
        <img
          src={MAIN_PAGE_IMAGE.main}
          alt='pokemons'
          className='MainPokemon'
        />
      </div>
    )
  }
}

export default MainPage
