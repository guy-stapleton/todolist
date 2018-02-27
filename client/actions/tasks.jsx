import request from 'superagent'

export function displayTasks(tasks) {
  return {
    type: 'SHOW_TASKS',
    tasks
  }
}


export function getTasks() {
  return dispatch => {
    request
      .get('/api/tasks')
      .then(res => {
        dispatch(displayTasks(res.body))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
