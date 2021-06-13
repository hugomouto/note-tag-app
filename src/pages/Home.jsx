import React, { Component } from 'react'
import NewNote from './NewNote'
import NoteList from './NoteList';
import Note from './Note';
import MenuBar from '../components/MenuBar'
import { Route, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Switch>
          <Route exact path='/' component={ NewNote }/>
          <Route exact path='/notes' component={ NoteList } />
          <Route exact path='/notes/:id' render={(props) => <Note { ...props}/>} />
        </Switch>
      </div>
    )
  }
}
