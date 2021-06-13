import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NoteCard extends Component {  
  render() {
    const { noteData } = this.props
    return (
      <Link style={{display: 'block'}} to={`/notes/${noteData.id}`} > {/*MUDAR ESTILO*/}
        {noteData.id}
        {noteData.noteContent}
      </Link>
    )
  }
}
