import React from 'react'
import firebase from './firebase'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class EditGameCard extends React.Component {
  constructor () {
    super()
    this.state = {
      games: [],
      gameTitle: '',
      gameSystem: '',
      gamePhoto: '',
      gameMemory: '',
      gameMemoryTitle: ''

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
      gameMemory: this.state.gameMemory,
      gameMemoryTitle: this.state.gameMemoryTitle
    }
    return gamesRef
      .update(game)
      .then(response => {
        return response
      })
    // gamesRef.push(game)
    // this.setState({
    //   gameTitle: '',
    //   gameSystem: '',
    //   gamePhoto: '',
    //   gameMemory: ''
    // })
  }
  editCard () {

  }

  render () {
    console.log(this.props.location.pathname)
    // console.log(game.id)
    return (
      <div className='edit-note-container'>
        <form className='edit-note-form' onSubmit={this.handleSubmit}>
          <div class='input-field'>
            <label>Title of Game</label>
            <input type='text' name='gameTitle' onChange={this.handleChange} value={this.state.gameTitle} placeholder='Title of video game' />
          </div>

          <div class='input-field'>
            <label>Console</label>
            <input type='text' name='gameSystem' onChange={this.handleChange} value={this.state.gameSystem} placeholder='Game System' />
          </div>

          <div class='input-field'>
            <label>Photo</label>
            <input type='text' name='gamePhoto' onChange={this.handleChange} value={this.state.gamePhoto} placeholder='Add a photo URL' />
          </div>

          <div class='input-field'>
            <label>Title</label>
            <input type='text' name='gameMemoryTitle' onChange={this.handleChange} value={this.state.gamePhoto} placeholder='Change your title' />
          </div>

          <div class='input-field'>
            <label>Your memory</label>
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
