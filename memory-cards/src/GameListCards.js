// each card has pic of game, title of game, system, date released

import React from 'react'
import firebase from './firebase'
import { Link } from 'react-router-dom'
import EditGameCard from './EditGameCard'
import { Route } from 'react-router-dom'
import UserContext from './UserContext'
import AddComment from './AddComment'
import CommentContainer from './CommentContainer'

// import CategoryList from './CategoryList'
// import Loader from './Loader'

class GameListCards extends React.Component {
  constructor () {
    super()
    this.state = {
      games: [],
      viewComments: false,
      delete: false

    }
    this.deleteCard = this.deleteCard.bind(this)
    this.viewComments = this.viewComments.bind(this)
    this.deleteCheck = this.deleteCheck.bind(this)
  }

  viewComments (e) {
    e.preventDefault()
    this.setState({
      viewComments: !this.state.viewComments
    })
  }

  deleteCheck (e) {
    e.preventDefault()
    this.setState({
      delete: !this.state.delete
    })
  }

  deleteCard (e) {
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${this.props.game.id}`)
    gamesRef.remove()
  }

  editCard (e) {
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${this.props.game.id}`)
  }

  render () {
    const { user } = this.props
    const gameID = this.props.game.id
    // const { userId } = this.props.user.uid

    // if (this.props.game.gameUser == this.props.user.uid) {
    //   console.log('usergame = user')
    //   console.log(this.props.user.uid)
    // }
    console.log(this.props.game.id)
    return (
      <div className='gameContainer'>
        <div key={this.props.game.id}>
          <div className='game-memory-top'>
            <h3><strong>{this.props.game.gameTitle}</strong></h3>
            <div>{this.props.game.gameSystem}</div>
          </div>
          <div><img width='200px' src={this.props.game.gamePhoto} /></div>
          {this.props.game.gameUserName && (
            <div>A memory from <strong>{this.props.game.gameUserName}:</strong></div>
          )}
          <div className='game-memory-text'>{this.props.game.gameMemory}</div>
        </div>
        <div className='card-buttons'>
          {user && this.props.game.gameUser === this.props.user.uid && (
            <div className='edit-delete'>
              <Link to={`/edit/${this.props.game.id}`}>
                {/* <button className='button edit-button'>EDIT</button> */}
                <button>✏️</button>
              </Link>
              {/* <button className='button delete-button' onClick={this.deleteCard}>DELETE</button> */}
              {!this.state.delete && (
                <button onClick={this.deleteCheck}>💣</button>
              )}
              {this.state.delete && (
                <div>
                  <button className='button-danger' onClick={this.deleteCard}>Delete?</button>
                  <button className='button' onClick={this.deleteCheck}>Don't Delete!</button>
                </div>
              )}
            </div>
          )}
          {user && (
            <Link to={`/comment/${this.props.game.id}`}>
              <button className='button button-dark comment-button'>Add Comment</button>
            </Link>
          )}
        </div>
        {!this.state.viewComments && (
          <button className='button-dark' onClick={this.viewComments}>show comments</button>

        )}
        {this.state.viewComments && (
          <div>
            <button className='button-dark' onClick={this.viewComments}>hide comments</button>
            <div>Comments:</div>
            <CommentContainer gameId={gameID} />
          </div>
        )}
      </div>

    )
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <GameListCards {...props} user={user} />}
  </UserContext.Consumer>
)
