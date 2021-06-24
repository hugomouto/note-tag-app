import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <div className='menubar'>
        <Link to='/'><i class="far fa-sticky-note"></i></Link>
        <Link to='/notes'><i class="fas fa-list-ul"></i></Link>
      </div>
    )
  }
}
