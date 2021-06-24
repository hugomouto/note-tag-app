import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NoteCard extends Component {  
  render() {
    const { noteData } = this.props
    return (
      <Link className="note-card" to={`/notes/${noteData.id}`} >
          {noteData.id}
          {noteData.noteContent}
      </Link>
    )
  }
}
