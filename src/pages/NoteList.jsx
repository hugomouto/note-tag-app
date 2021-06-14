import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import NoteCard from '../components/NoteCard'
import * as CRUD from '../services/crudFunctions';

export default class NoteList extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      loading: true,
    }
  }
    
  componentDidMount() {
    this.fetchNotes()
  }

  async fetchNotes() {
    const notes = await CRUD.getNotes();
    this.setState({ notes, loading: false });
  }



  render() {
    const { loading, notes } = this.state
    if (!notes || notes.length === 0) {
      return `Ainda não há notas`
    }
    return (
      <div>
        { loading
          ? <Loading />
          : notes.map(note => <NoteCard key={note.id} noteData={note}/>)
        }
      </div>
    )
  }
}
