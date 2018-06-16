import React from 'react'
import { Link } from 'react-router-dom'

class PageHeader extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1 className='header-text'>
          Memory Cards
        </h1>
        <div>Love letters to your favorite video games</div>
      </div>
    )
  }
}

export default PageHeader
