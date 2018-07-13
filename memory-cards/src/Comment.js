// each card has pic of game, title of game, system, date released

import React from 'react'
import firebase from './firebase'
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
    this.upvote = this.upvote.bind(this)
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
  upvote () {
    this.setState({
      upvotes: this.state.upvotes + 1
    })
    const comment = {
      commentTitle: this.props.commentTitle,
      commentText: this.props.commentText,
      commentUser: this.props.commentUser,
      commentUserName: this.props.commentUserName,
      upvotes: this.props.upvotes + this.state.upvotes
    }
    const commentsRef = firebase.database().ref(`games/${this.props.gameId}/comments/${this.props.commentId}`)
    console.log(this.state.upvotes)
    return commentsRef
      .update(comment)
      .then(response => {
        return response
      })
  }

  render () {

    const { user } = this.props
    // const { userId } = this.props.user.uid

    // if (this.props.game.gameUser == this.props.user.uid) {
    //   console.log('usergame = user')
    //   console.log(this.props.user.uid)

    return (
      <div className='commentContainer'>
        <div key={this.props.comment.id}>
          <div className='comment-user'><strong>{this.props.comment.commentUserName}</strong></div>
          {/* <div className='comment-title'><strong>{this.props.comment.commentTitle}</strong></div> */}
          <div className='comment-text'>{this.props.comment.commentText}</div>
          {/* <div>upvotes:{this.props.comment.upvotes}</div>
          <button onClick={this.upvote} >upvote button</button> */}
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
