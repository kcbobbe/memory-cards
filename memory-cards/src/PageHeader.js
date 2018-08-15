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
        <div className='container'>
          <div className='row'>
            <div className='col'>
            <div className='row'>
          <h3 style={{textAlign:'left'}} className='header-text'>
          Memory Cards
          </h3>
          </div>
          <div className='row'>
            <div style={{textAlign:'left'}} className='subtitle'>Love letters to your favorite video games</div>
          </div>
          </div>

          
          <div className='col header-buttons'>
            {user ? (
            <div>
              {/* <div>
                <strong>Welcome, {user.displayName}!</strong>
              </div> */}
              <div>
                <Link to='/new'>
                  <button className='button-light'>+</button>
                </Link>
                <Link to='/'>
                  <button className='button-danger' onClick={this.handleLogout}>-></button>
                </Link>
              </div>
            </div>
            ):(
            <button onClick= {this.handleLogin}>Login with Google</button>
          )}
            
            </div>

          </div>
          
         
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
