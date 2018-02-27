import React from 'react'
import {connect} from 'react-redux'

import {getTasks} from '../actions/tasks'

class TaskList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.dispatch(getTasks())
  }
  render() {
    const tasks = this.props.tasks
    return (
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map((task, i) => {
            return <li key={i}>{task.task_name}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(TaskList)
