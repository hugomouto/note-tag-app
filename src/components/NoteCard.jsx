import React, { Component } from 'react'

export default class NoteCard extends Component {  
  render() {
    const { noteData } = this.props
    return (
      <div>
        {noteData.id}
        {noteData.noteContent}
      </div>
    )
  }
}
