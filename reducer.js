const makeDeepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
const initialState = {
  todoList: []
}
const reducer = (state = initialState, action) => {
  const newState = makeDeepCopy(state)
  return newState
}