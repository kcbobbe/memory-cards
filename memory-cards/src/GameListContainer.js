import React from 'react'
// import CategoryList from './CategoryList'
// import Loader from './Loader'
// import Database from '../Database'
import { Route } from 'react-router-dom'
import GameListCards from './GameListCards'
import firebase from './firebase'
import UserContext from './UserContext'


class GameListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      games: []
    }
  }

  componentDidMount () {
    const gamesRef = firebase.database().ref('games')
    gamesRef.on('value', (snapshot) => {
      let games = snapshot.val()
      let newState = []
      for (let game in games) {
        newState.push({
          id: game,
          gameTitle: games[game].gameTitle,
          gameSystem: games[game].gameSystem,
          gamePhoto: games[game].gamePhoto,
          gameMemory: games[game].gameMemory,
          gameMemoryTitle: games[game].gameMemoryTitle,
          gameUser: games[game].gameUser,
          gameUserName: games[game].gameUserName
        })
      }
      this.setState({
        games: newState
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
          {this.state.games.map((game) => {
            const gameID = game.id
            return (
              <GameListCards game={game} />
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
    {user => <GameListContainer {...props} user={user} />}
  </UserContext.Consumer>
)