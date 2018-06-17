import React from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import UserContext from './UserContext'

class PageHeader extends React.Component {

  handleLogin = (event) => {
    event.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  handleLogout = (event) => {
    event.preventDefault()
    firebase.auth().signOut()
  }

  render () {
    // const { user } = true
    const { user } = this.props


    return (
      <div className='header'>
        <h1 className='header-text'>
          Memory Cards
        </h1>
        <div>Love letters to your favorite video games</div>
        <div>
          <button onClick={this.handleLogout}>Logout</button>
          <button onClick= {this.handleLogin}>Login</button>
          <Link to='/new'>
            <button>Add a memory!</button>
          </Link>
        
        </div>
      </div>
    )
  }
}

// export default PageHeader

export default props => (
  <UserContext.Consumer>
    {user => <PageHeader {...props} user={user} />}
  </UserContext.Consumer>
)
