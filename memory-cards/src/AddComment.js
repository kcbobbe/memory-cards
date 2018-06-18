// input for title, url for pic, system, date
// username and current date is automatically sent to firebase
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from './firebase'
import UserContext from './UserContext'

// class AddComment extends Component {
//   constructor () {
//     super()
//     this.state = {
//       comment: {
//         title: '',
//         text: ''
//       }
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
    
//   }
//   handleChange (e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }
//   handleSubmit (e) {
//     e.preventDefault()
//     const gamesRef = firebase.database().ref('games')
//     const user = this.props.user.uid
//     const game = {
//       comment: {
//         title: '',
//         text: ''
//       }
//     }
//       // gameUser: this.state.gameUser
    
//     gamesRef.push(game)
//     this.setState({
//       comment: {
//         title: '',
//         text: ''
//       }
//     })
//   }

//   componentDidMount () {
//     const gamesRef = firebase.database().ref('games')
//     gamesRef.on('value', (snapshot) => {
//       let games = snapshot.val()
//       let newState = []
//       for (let game in games) {
//         newState.push({
//           // id: game,
//           // gameTitle: games[game].gameTitle,
//           // gameSystem: games[game].gameSystem,
//           // gamePhoto: games[game].gamePhoto,
//           // gameMemory: games[game].gameMemory,
//           // gameUser: this.props.user,
//           comment: {
//             title: games[game].title,
//             text: games[game].text
//           }

//         })
//       }
//       this.setState({
//         games: newState
//       })
//     })
//   }

//   render () {
//     return (
//       <div className='new-note-container'>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' name='commentTitle' onChange={this.handleChange} value={this.state.comment.title} placeholder='Title of video game' />
//           <div>
//             <textarea type='text' name='gameMemory' onChange={this.handleChange} value={this.state.comment.text} placeholder='Add a favorite memory' />
//           </div>
//           <button>Add Comment!</button>
//         </form>
//         <Link to='/'>
//           <div>BACK</div>
//         </Link>
//         {/* <div>
//           <ul>
//             {this.state.games.map((game) => {
//               return (
//                 <li key={game.id}>
//                   <h3>{game.gameTitle}</h3>
//                   <div>{game.gameSystem}</div>
//                   <div><img width='200px' src={game.gamePhoto} /></div>
//                   <div>{game.gameMemory}</div>
//                 </li>
//               )
//             })}
//           </ul>
//         </div> */}
//       </div>
//     )
//   }
// }




// import React from 'react'
// import firebase from './firebase'
// import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'

class AddComment extends React.Component {
  constructor () {
    super()
    this.state = {
      commentTitle: '',
      commentText: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  // componentDidMount () {

  handleChange (e) {
    console.log((this.props.location.pathname).slice(9))
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // }
  handleSubmit (e) {
    const gameId = (this.props.location.pathname).slice(9)
    e.preventDefault()
    const gamesRef = firebase.database().ref(`games/${gameId}/comments`)
    const comments = {
      commentTitle: this.state.commentTitle,
      commentText: this.state.commentText
    }
    gamesRef.push(comments)
    this.setState({
      commentTitle: '',
      commentText: ''
    })
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


//   render () {
//     console.log(this.props.location.pathname)
//     // console.log(game.id)
//     return (
//       <div className='new-note-container'>
//         <form onSubmit={this.handleSubmit}>
//           <input type='text' name='gameTitle' onChange={this.handleChange} value={this.state.gameTitle} placeholder='Title of video game' />
//           <input type='text' name='gameSystem' onChange={this.handleChange} value={this.state.gameSystem} placeholder='Game System' />
//           <input type='text' name='gamePhoto' onChange={this.handleChange} value={this.state.gamePhoto} placeholder='Add a photo URL' />
//           <div>
//             <textarea type='text' name='gameMemory' onChange={this.handleChange} value={this.state.gameMemory} placeholder='Add a favorite memory' />
//           </div>
//           <button>Add Game!</button>
//         </form>
//         <Link to='/'>
//           <div>BACK</div>
//         </Link>
//       </div>
//     )
//   }
// }

// export default EditGameCard

  render () {
    return (
      <div className='new-note-container'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='commentTitle' onChange={this.handleChange} value={this.state.commentTitle} placeholder='Title of video game' />
          <div>
            <textarea type='text' name='commentText' onChange={this.handleChange} value={this.state.commentText} placeholder='Add a favorite memory' />
          </div>
          <button>Add Comment!</button>
        </form>
        <Link to='/'>
          <div>BACK</div>
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
}

export default props => (
  <UserContext.Consumer>
    {user => <AddComment {...props} user={user} />}
  </UserContext.Consumer>
)
