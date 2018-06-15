import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import request from 'superagent'
import GameListContainer from './GameListContainer'
import PageHeader from './PageHeader'
import NewCard from './NewCard'
import firebase from './firebase'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div>
          <PageHeader />
          {/* <Route exact path='/' component={GameListContainer} /> */}
          <NewCard />
          <GameListContainer />
          {/* <Route path='/category/:categoryId' component={GameNoteContainer} />>
          <Routh path ='/' */}
        </div>
      </div>
    )
  }
}

export default App
