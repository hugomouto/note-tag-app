import React, { Component } from 'react'
import Loading from '../components/Loading'
import NoteCard from '../components/NoteCard'
import * as CRUD from '../services/crudFunctions';

export default class NoteList extends Component {
  constructor() {
    super()
    this.state = {
      notes: [],
      loading: true,
      searchText: '',
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
    
  componentDidMount() {
    this.fetchNotes()
  }

  async fetchNotes() {
    const notes = await CRUD.getNotes();
    this.setState({ notes, loading: false});
  }

  handleSearch({ target }) {
    const { value } = target
    this.setState({
      searchText: value,
    })
  }


  render() {
    const { loading, notes, searchText } = this.state
    if (!notes || notes.length === 0) {
      return `Ainda não há notas`
    }
    return (
      <div>
        <label htmlFor="">Busca
          <input onChange={this.handleSearch}  value={searchText} type="text" />
        </label>
        { loading
          ? <Loading />
          : notes.filter((note) => note.noteContent.includes(searchText)).map(note => <NoteCard key={note.id} noteData={note}/>)
        }
      </div>
    )
  }
}
