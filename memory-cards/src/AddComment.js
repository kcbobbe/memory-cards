// input for title, url for pic, system, date
// username and current date is automatically sent to firebase
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import firebase from './firebase'
import UserContext from './UserContext'

class AddComment extends React.Component {
  constructor () {
    super()
    this.state = {
      commentTitle: '',
      commentText: '',
      upvotes: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // }
  handleSubmit (e) {
    const gameId = (this.props.location.pathname).slice(9)
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${gameId}/comments`)
    const user = this.props.user.uid
    const userName = this.props.user.displayName
    const comments = {
      // commentTitle: this.state.commentTitle,
      commentText: this.state.commentText,
      commentUser: user,
      commentUserName: userName,
      upvotes: this.state.upvotes
    }
    gamesRef.push(comments)
    this.setState({
      // commentTitle: '',
      commentText: '',
      commentUser: this.props.user,
      commentUserName: this.props.userName,
      upvotes: this.state.upvotes

    })
    this.props.history.push('/')
  }

  render () {
    if (this.props.user) {
      return (
        <div className='new-note-container input-container'>
          <h3>
            Share a comment
          </h3>
          <form onSubmit={this.handleSubmit}>
            {/* <input type='text' name='commentTitle' onChange={this.handleChange} value={this.state.commentTitle} placeholder='Title of video game' /> */}
            <div className='text-input input-field'>
              <textarea type='text' name='commentText' onChange={this.handleChange} value={this.state.commentText} />
            </div>
            <button>Add Comment!</button>
            <Link to='/'>
              <button className='button-danger'>Cancel</button>
            </Link>
          </form>
          
          {/* <div>
            <ul>
              {this.state.games.map((game) => {
                return (
                  <li key={game.id}>
                    <h3>{game.gameTitle}</h3>
                    <div>{game.gameSystem}</div>
                    <div><img width='200px' src={game.gamePhoto} /></div>
                    <div>{game.gameMemory}</div>
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      )
    }
    else {
      return <Redirect to={'/'} />
    }
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <AddComment {...props} user={user} />}
  </UserContext.Consumer>
)
