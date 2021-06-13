import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuBar extends Component {
  render() {
    return (
      <div>
        <Link>Create Note</Link>
        <Link>Notes List</Link>
      </div>
    )
  }
}
