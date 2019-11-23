const toDoItem = () => {
  return {
    toDoItem: "",
    isComplete: false,
  }
}
const initialState = {
  toDoList: []
}
const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
const initialState = {
  todoList: []
}
const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)
  if (action.type === 'DONE') {
    return {

    }
  }
  return newState
}