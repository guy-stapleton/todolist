import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import TaskList from './TaskList'

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Router>
        <div>
          <h1>Toto</h1>
          <Link to="/tasks">Tasks</Link>
          <Route exact path='/tasks' component={TaskList} />
        </div>
      </Router>
    )
  }
}

export default App
