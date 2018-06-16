// each card has pic of game, title of game, system, date released

import React from 'react'
import firebase from './firebase'

// import CategoryList from './CategoryList'
// import Loader from './Loader'

class GameListCards extends React.Component {
  constructor () {
    super()
    this.state = {
      games: []

    }
  }

  // componentDidMount () {
  //   const gamesRef = firebase.database().ref('games')
  //   gamesRef.on('value', (snapshot) => {
  //     let games = snapshot.val()
  //     let newState = []
  //     for (let game in games) {
  //       newState.push({
  //         id: game,
  //         gameTitle: games[game].gameTitle,
  //         gameSystem: games[game].gameSystem,
  //         gamePhoto: games[game].gamePhoto,
  //         gameMemory: games[game].gameMemory
  //       })
  //     }
  //     this.setState({
  //       games: newState
  //     })
  //   })
  // }

  render () {
    return (
      <div>
        <div key={this.props.game.id}>
          <h3>{this.props.game.gameTitle}</h3>
          <div>{this.props.game.gameSystem}</div>
          <div><img width='200px' src={this.props.game.gamePhoto} /></div>
          <div>{this.props.game.gameMemory}</div>
        </div>
      </div>
    )
  }
}

export default GameListCards
