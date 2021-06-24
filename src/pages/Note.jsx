import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loading from '../components/Loading'
import NoteForm from '../components/NoteForm'
import * as CRUD from '../services/crudFunctions';

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldRedirect: false,
      note: null,
      loading: true,
    }
    this.fetchNote = this.fetchNote.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.fetchNote(id)
  }

  async fetchNote(id) {
    const note = await CRUD.getNote(id);
    this.setState({ note, loading: false });
  }

  handleSubmit(newNote){
    CRUD.updateNote(newNote)
  }

  async handleDelete(){
    const { note } = this.state;
    await CRUD.deleteNote(note)
    this.setState({
      shouldRedirect: true,
    })
  }

  render() {
    const { loading, note, shouldRedirect } = this.state
    if (shouldRedirect) {
      return <Redirect to='/notes'/>
    }
    return (
      <div className='note-screen'>
        { loading
          ? <Loading />
          : <NoteForm noteData={note} onSubmit={this.handleSubmit}/>}
          <button onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}
