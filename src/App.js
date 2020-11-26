import React, { Component } from 'react'
import './App.css'
import Header from './components/UI/Header/Header'
import Navigation from './components/UI/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='Header_wraper'>
          <Header />
        </header>
        <Navigation />
      </div>
    )
  }
}

export default App
