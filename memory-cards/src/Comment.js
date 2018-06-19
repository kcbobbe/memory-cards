// each card has pic of game, title of game, system, date released

import React from 'react'
// import firebase from './firebase'
import { Link } from 'react-router-dom'
import EditGameCard from './EditGameCard'
import { Route } from 'react-router-dom'
import UserContext from './UserContext'
import AddComment from './AddComment'

// import CategoryList from './CategoryList'
// import Loader from './Loader'

class Comment extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: []

    }
    // this.deleteCard = this.deleteCard.bind(this)
  }

  // deleteCard (e) {
  //   e.preventDefault()
  //   const gamesRef = firebase.database().ref(`games/${this.props.game.id}`)
  //   gamesRef.remove()
  // }

  // editCard (e) {
  //   e.preventDefault()
  //   const gamesRef = firebase.database().ref(`games/${this.props.game.id}`)

  // }

  render () {
    const { user } = this.props
    // const { userId } = this.props.user.uid

    // if (this.props.game.gameUser == this.props.user.uid) {
    //   console.log('usergame = user')
    //   console.log(this.props.user.uid)
    // }
    console.log(this.props.user.displayName)
    return (
      <div className='commentContainer'>
        <div key={this.props.comment.id}>
          <div className='game-memory-top'>
            <h3><strong>{this.props.comment.commentTitle}</strong></h3>
          </div>
          <div>A comment from <strong>{this.props.user.displayName}:</strong></div>
          <div className='game-memory-text'>{this.props.comment.commentText}</div>
        </div>
        {/* {user && this.props.game.gameUser == this.props.user.uid && (
          <div>
            <Link to={`/edit/${this.props.game.id}`}>
              <button className='button edit-button'>EDIT</button>
            </Link>
            <button className='button delete-button' onClick={this.deleteCard}>DELETE</button>
          </div>
        )} */}
        {/* {user && (
          <Link to={`/comment/${this.props.game.id}`}>
            <button className='button button-dark comment-button'>Add Comment</button>
          </Link>
        )} */}
      </div>

    )
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <Comment {...props} user={user} />}
  </UserContext.Consumer>
)
