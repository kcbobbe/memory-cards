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
    console.log(user)

    return (
      <div className='header'>
        <h1 className='header-text'>
         Memory Cards
        </h1>
        <div className='subtitle'>Love letters to your favorite video games</div>
        <div>
          {user ? (
          <div>
            <div>
              <strong>Welcome, {user.displayName}!</strong>
            </div>
            <div>
              <Link to='/new'>
                <button className='button-light'>Add a memory!</button>
              </Link>
              <button className='button-danger' onClick={this.handleLogout}>Logout</button>
            </div>
          </div>
          ):(
          <button onClick= {this.handleLogin}>Login with Google</button>
        )}
          
        
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
