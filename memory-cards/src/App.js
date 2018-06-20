import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import GameListContainer from './GameListContainer'
import PageHeader from './PageHeader'
import NewCard from './NewCard'
// import firebase from './firebase'
import firebase from 'firebase'
import UserContext from './UserContext'
import EditGameCard from './EditGameCard'
import AddComment from './AddComment'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: firebase.auth().currentUser
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user: user
      })
    })
  }

  render () {
    return (
      <UserContext.Provider value={this.state.user}>
        <div className='App'>
          <div>
            <PageHeader />
            {/* <Route exact path='/' component={GameListContainer} /> */}
            <Route exact path='/new' component={NewCard} />
            <Route exact path='/' component={GameListContainer} />
            <Route path='/comment' component={AddComment} />
            <Route path='/edit' component={EditGameCard} />
            {/* <Route path='/category/:categoryId' component={GameNoteContainer} />>
            <Routh path ='/' */}
          </div>
        </div>
      </UserContext.Provider>
    )
  }
}

export default App
