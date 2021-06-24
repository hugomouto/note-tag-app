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
      return `Não há notas`
    }
    return (
      <div className='note-list-screen flex-column'>
        <label htmlFor=""  className='note-list__search-label'>
          <input 
            className='note-list__search-input'
            placeholder='Search' 
            onChange={this.handleSearch}  
            value={searchText} type="text" 
            />
        </label>
        <div className="cards-wrapper flex-column">
          { loading
            ? <Loading />
            : notes.filter((note) => note.noteContent
            .includes(searchText))
            .map(note => <NoteCard key={note.id} noteData={note}/>)
          }
        </div>
      </div>
    )
  }
}
