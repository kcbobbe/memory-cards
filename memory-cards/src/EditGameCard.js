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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  // componentDidMount () {

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // }
  handleSubmit (e) {
    const gameId = (this.props.location.pathname).slice(6)
    // console.log((gameId).slice(6))
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${gameId}`)
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

  // componentDidMount () {
  //   const gameId = (this.props.location.pathname).slice(6)
  //   const gamesRef = firebase.database().ref(`games/${gameId}`)
  //   gamesRef.on('value', (snapshot) => {
  //     let games = snapshot.val()
  //     let newState = []
  //     for (let game in games) {
  //       newState.push({
  //         id: game,
  //         gameTitle: games[game].gameTitle,
  //         gameSystem: games[game].gameSystem,
  //         gamePhoto: games[game].gamePhoto,
  //         gameMemory: games[game].gameMemory,
  //         gameUser: this.props.user,
  //         gameUserName: this.props.userName

  //       })
  //     }
  //     this.setState({
  //       games: newState
  //     })
  //   })
  // }


  render () {
    console.log(this.props.location.pathname)
    // console.log(game.id)
    return (
      <div className='new-note-container'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='gameTitle' onChange={this.handleChange} value={this.state.gameTitle} placeholder='Title of video game' />
          <input type='text' name='gameSystem' onChange={this.handleChange} value={this.state.gameSystem} placeholder='Game System' />
          <input type='text' name='gamePhoto' onChange={this.handleChange} value={this.state.gamePhoto} placeholder='Add a photo URL' />
          <div>
            <textarea type='text' name='gameMemory' onChange={this.handleChange} value={this.state.gameMemory} placeholder='Add a favorite memory' />
          </div>
          <button>Add Game!</button>
        </form>
        <Link to='/'>
          <div>BACK</div>
        </Link>
      </div>
    )
  }
}

export default EditGameCard