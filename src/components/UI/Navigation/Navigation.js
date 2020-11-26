import React from 'react'
import './Navigation.css'
import Routes from '../../../routes/routes'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className={'Navigation'}>
        <ul>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/pokemons'>Pokemons</NavLink>
          </li>
          <li>
            <NavLink to='/contacts'>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <Routes />
    </div>
  )
}

export default Navigation
