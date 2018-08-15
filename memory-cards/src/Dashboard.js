import React from 'react'
import firebase from './firebase'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import UserContext from './UserContext'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      games: [],
      gameTitle: '',
      gameSystem: '',
      gamePhoto: '',
      gameMemory: '',
      gameMemoryTitle: ''

    }
  }

  handleLogin = (event) => {
    event.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }
  // componentDidMount () {

  // }

  render () {
    // console.log(game.id)
    return (
      <div className='container'>
        <Link to='/'>
          <div>BACK</div>
        </Link>
        <button onClick={this.handleLogin}>Login with Google</button>

      </div>
    )
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <Dashboard {...props} user={user} />}
  </UserContext.Consumer>
)