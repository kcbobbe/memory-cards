import React from 'react'
// import CategoryList from './CategoryList'
// import Loader from './Loader'
// import Database from '../Database'
import GameListCards from './GameListCards'

class GameListContainer extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <GameListCards />
      </div>
    )
  }
}

export default GameListContainer
