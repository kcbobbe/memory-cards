// input for title, url for pic, system, date
// username and current date is automatically sent to firebase
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase'

class NewCard extends Component {
  constructor () {
    super()
    this.state = {
      gameTitle: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    const gamesRef = firebase.database().ref('games')
    const game = {
      gameTitle: this.state.gameTitle
    }
    gamesRef.push(game)
    this.setState({
      gameTitle: ''
    })
  }

  render () {
    return (
      <div className='new-note-container'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='gameTitle' onChange={this.handleChange} value={this.state.gameTitle} placeholder='Add a favorite video game.' />
          <button>Add Game!</button>
        </form>
      </div>
    )
  }
}

export default NewCard
