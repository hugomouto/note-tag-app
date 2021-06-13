import React, { Component } from 'react'
import NewNote from './NewNote'
import MenuBar from '../components/MenuBar'
import { Route, Switch } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <Switch>
          <Route exact path='/' component={NewNote}/>
        </Switch>
      </div>
    )
  }
}