import React from 'react'
// import CategoryList from './CategoryList'
// import Loader from './Loader'
// import Database from '../Database'
// import { Route } from 'react-router-dom'
import GameListCards from './GameListCards'
import firebase from './firebase'
import UserContext from './UserContext'
import Comment from './Comment'

class CommentContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount () {
    const commentsRef = firebase.database().ref(`${this.props.gameID}/comments`)
    commentsRef.on('value', (snapshot) => {
      let comments = snapshot.val()
      let newState = []
      for (let comment in comments) {
        newState.push({
          id: comment,
          commentTitle: comments[comment].commentTitle,
          commentText: comments[comment].commentText,
          commentUser: comments[comment].commentUser,
          commentUserName: comments[comment].commentUserName
          // gameMemory: comments[comment].gameMemory,
          // gameUser: comments[comment].gameUser,
          // gameUserName: comments[comment].gameUserName
        })
      }
      this.setState({
        comments: newState
      })
      // .then(() => {
      // (this.props.history.push('/'))
      // }
      // )
    // })
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.state.games.map((comment) => {
            // const gameID = game.id
            return (
              <Comment comment={comment} />
              // <Route
              //   path='/:{game.id}'
              //   render={(props) => <GameListCards {...props} game={game} />}
              // />
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <CommentContainer {...props} user={user} />}
  </UserContext.Consumer>
)