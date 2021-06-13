import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Create Note</Link>
        <Link to='/notes'>Notes List</Link>
      </div>
    )
  }
}
