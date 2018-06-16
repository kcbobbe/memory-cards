import React from 'react'
// import CategoryList from './CategoryList'
// import Loader from './Loader'
// import Database from '../Database'
import GameListCards from './GameListCards'
import firebase from './firebase'


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
          gameMemory: games[game].gameMemory
        })
      }
      this.setState({
        games: newState
      })
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.state.games.map((game) => {
            return (
              <GameListCards game={game} />
            )
          })
          }
        </div>
      </div>
    )
  }
}

export default GameListContainer
