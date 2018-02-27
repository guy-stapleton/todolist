function tasks (state = [], action) {
 switch  (action.type) {
   case 'SHOW_TASKS':
   return action.tasks
   default:
   return state
 }
}

export default tasks
