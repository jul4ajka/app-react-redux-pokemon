import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from '../containers/MainPage/MainPage'
import PokemonsPage from '../containers/PokemonsPage/PokemonsPage'
import ContactsPage from '../containers/ContactsPage/ContactPage'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/pokemons' component={PokemonsPage} />
        <Route path='/contacts' component={ContactsPage} />
      </Switch>
    </div>
  )
}

export default Routes
