// each card has pic of game, title of game, system, date released

import React from 'react'
import firebase from './firebase'
import { Link } from 'react-router-dom'

// import CategoryList from './CategoryList'
// import Loader from './Loader'

class GameListCards extends React.Component {
  constructor () {
    super()
    this.state = {
      games: []

    }
    this.deleteCard = this.deleteCard.bind(this)
  }

  deleteCard (e) {
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${this.props.game.id}`)
    gamesRef.remove()
  }

  render () {
    console.log(this.props.game.id)

    return (
      <div className='gameContainer'>
        <div key={this.props.game.id}>
          <h3>{this.props.game.gameTitle}</h3>
          <div>{this.props.game.gameSystem}</div>
          <div><img width='200px' src={this.props.game.gamePhoto} /></div>
          <div>{this.props.game.gameMemory}</div>
        </div>
        <div>
          <button className='button edit-button'>EDIT</button>
          <button className='button delete-button' onClick={this.deleteCard}>DELETE</button>
        </div>
      </div>
    )
  }
}

export default GameListCards
