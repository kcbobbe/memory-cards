import React from 'react'
import firebase from './firebase'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class EditGameCard extends React.Component {
  constructor () {
    super()
    this.state = {
      games: []

    }
    this.editCard = this.editCard.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    const gamesRef = firebase.database().ref('games')
    const game = {
      gameTitle: this.state.gameTitle,
      gameSystem: this.state.gameSystem,
      gamePhoto: this.state.gamePhoto,
      gameMemory: this.state.gameMemory
    }
    gamesRef.push(game)

    this.setState({
      gameTitle: '',
      gameSystem: '',
      gamePhoto: '',
      gameMemory: ''
    })
  }
  editCard () {
    
  }

  render () {
    return (

      <div>
        HEY
      </div>
    )
  }
}

export default EditGameCard