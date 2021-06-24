import React, { Component } from 'react'
import NoteForm from '../components/NoteForm'
import * as CRUD from '../services/crudFunctions';

export default class NewNote extends Component {
  constructor() {
    super()
    console.log('oi')
  }

  handleSubmit(newNote){
    CRUD.createNote(newNote)
  }

  render() {
    return (
      <div className='new-note-screen flex-column'>
        <NoteForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
