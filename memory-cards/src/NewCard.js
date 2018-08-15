// input for title, url for pic, system, date
// username and current date is automatically sent to firebase
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import UserContext from './UserContext'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'



class NewCard extends Component {
  constructor () {
    super()
    this.state = {
      gameTitle: '',
      gameSystem: '',
      gamePhoto: '',
      gameMemory: '',
      gameMemoryTitle:'',
      gameUser: '',
      gameUserName: ''
      // games: []
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
    const user = this.props.user.uid
    const userName = this.props.user.displayName
    const game = {
      gameTitle: this.state.gameTitle,
      gameSystem: this.state.gameSystem,
      gamePhoto: this.state.gamePhoto,
      gameMemory: this.state.gameMemory,
      gameMemoryTitle: this.state.gameMemoryTitle,
      gameUser: user,
      gameUserName: userName
      // gameUser: this.state.gameUser
    }
    gamesRef.push(game)
    this.setState({
      gameTitle: '',
      gameSystem: '',
      gamePhoto: '',
      gameMemoryTitle: '',
      gameMemory: '',
      gameUser: this.props.user,
      gameUserName: this.props.userName
    })
    this.props.history.push('/')
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
          gameUser: this.props.user,
          gameUserName: this.props.userName

        })
      }
      this.setState({
        games: newState
      })
    })
  }

  render () {
    // console.log(this.props.location.pathname)
    if (this.props.user) {
      return (
        <div className='new-note-container input-container'>
        <p>
          Add a favorite memory.
        </p>
          <form onSubmit={this.handleSubmit}>
            <div className='text-input input-field'>
              <label>Game Title</label>
              <input type='text' name='gameTitle' onChange={this.handleChange} value={this.state.gameTitle} />
            </div>
            <div className='text-input input-field'>
              <label>Game System</label>
              <input type='text' name='gameSystem' onChange={this.handleChange} value={this.state.gameSystem} />
            </div>
            <div className='text-input input-field'>
              <label>Photo</label>
              <input type='text' name='gamePhoto' onChange={this.handleChange} value={this.state.gamePhoto} />
              <p class='input-hint'>Enter the image URL</p>
            </div>
            <div className='text-input input-field'>
              <label>Title</label>
              <input type='text' name='gameMemoryTitle' onChange={this.handleChange} value={this.state.gameMemoryTitle} />
              <p class='input-hint'>Add a title of your memory</p>
            </div>
            <div className='text-input input-field'>
              <label>Your Memory</label>
              <textarea className='memory-input' type='text' name='gameMemory' onChange={this.handleChange} value={this.state.gameMemory} />
            </div>
            <button>Add Memory!</button>
          </form>
          <Link to='/'>
            <button>BACK</button>
          </Link>
          {/* <div>
            <ul>
              {this.state.games.map((game) => {
                return (
                  <li key={game.id}>
                    <h3>{game.gameTitle}</h3>
                    <div>{game.gameSystem}</div>
                    <div><img width='200px' src={game.gamePhoto} /></div>
                    <div>{game.gameMemory}</div>
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      )
    }
    else {
      return <Redirect to={'/'} />
    }
  }
}

export default props => (
  <UserContext.Consumer>
    {user => <NewCard {...props} user={user} />}
  </UserContext.Consumer>
)
