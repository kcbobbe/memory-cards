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
      comments: [],
      upvotes: 0
    }
    this.upvote = this.upvote.bind(this)
  }

  componentDidMount () {
    const commentsRef = firebase.database().ref(`games/${this.props.gameId}/comments`)
    commentsRef.on('value', (snapshot) => {
      let comments = snapshot.val()
      console.log('check', this.props.gameId)
      console.log('check', comments)
      let newState = []
      for (let comment in comments) {
        newState.push({
          id: comment,
          commentTitle: comments[comment].commentTitle,
          commentText: comments[comment].commentText,
          commentUser: comments[comment].commentUser,
          commentUserName: comments[comment].commentUserName,
          upvotes: comments[comment].upvotes
          // gameMemory: comments[comment].gameMemory,
          // gameUser: comments[comment].gameUser,
          // gameUserName: comments[comment].gameUserName
        })
      }
      this.setState({
        comments: newState,
        upvotes: this.state.upvotes
      })
      // .then(() => {
      // (this.props.history.push('/'))
      // }
      // )
    // })
    })
  }

  upvote () {
    this.setState({
      upvotes: this.state.upvotes + 1
    })
    console.log(this.state.upvotes)
  }

  // handleSubmit (e) {
  //   const gameId = (this.props.location.pathname).slice(6)
  //   // console.log((gameId).slice(6))
  //   e.preventDefault()
  //   const gamesRef = firebase.database().ref(`games/${gameId}`)
  //   const game = {
  //     gameTitle: this.state.gameTitle,
  //     gameSystem: this.state.gameSystem,
  //     gamePhoto: this.state.gamePhoto,
  //     gameMemory: this.state.gameMemory
  //   }
  //   return gamesRef
  //     .update(game)
  //     .then(response => {
  //       return response
  //     })
    // gamesRef.push(game)
    // this.setState({
    //   gameTitle: '',
    //   gameSystem: '',
    //   gamePhoto: '',
    //   gameMemory: ''
    // })
  // }

  render () {
    return (
      <div>
        <div>
          {this.state.comments.map((comment) => {
            // const gameID = game.id
            return (
              <div>
                <Comment comment={comment} />
                {/* <div>upvotes:{this.state.upvotes}</div> */}
                {/* <button onClick={this.upvote}>UPVOTE!</button> */}
              {/* // <Route
              //   path='/:{game.id}'
              //   render={(props) => <GameListCards {...props} game={game} />}
              // /> */}
              </div>
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
