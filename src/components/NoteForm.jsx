import React, { Component } from 'react'

export default class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state ={
      noteData: {
        noteContent: '',
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( {target} ) {
    const { value } = target;
    this.setState({
      noteData:{ noteContent: value }
    })
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state.noteData)
  }

  componentDidMount() {
    const { noteData } = this.props
    console.log(noteData);
    console.log(this.props);
    this.setState({
      noteData: noteData || '',
    })
  }

  render() {
    return (
      <div>
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          onChange={this.handleChange} 
          value={this.state.noteData.noteContent}>
        </textarea>
        <button onClick={this.handleSubmit}>Salvar</button>
      </div>
    )
  }
}
