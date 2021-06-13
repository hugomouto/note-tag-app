import React, { Component } from 'react'
import NewNote from './NewNote'
import NoteList from './NoteList';
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
        </Switch>
      </div>
    )
  }
}
