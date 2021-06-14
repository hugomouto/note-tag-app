import React, { Component } from 'react'
import Loading from '../components/Loading'
import NoteForm from '../components/NoteForm'
import * as CRUD from '../services/crudFunctions';

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: null,
      loading: true,
    }
    this.fetchNote = this.fetchNote.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    const { loading, note } = this.state

    return (
      <div>
        NOTA
        { loading
          ? <Loading />
          : <NoteForm noteData={note} onSubmit={this.handleSubmit}/>}
      </div>
    )
  }
}
