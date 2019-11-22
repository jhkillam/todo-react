class ToDoForm extends React.Component {
  state = {
    toDoItem: "",
    isComplete: false,
    toDoList: []
  }
  handleInputChange = (changeEvent) => {
    this.setState({
      [changeEvent.target.name]: changeEvent.target.value
    })
  }
  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault()
    const newToDoList = [...this.state.toDoList]
    newToDoList.push({
      toDoItem: this.state.toDoItem,
      isComplete: false
    })
    this.setState({
      toDoList: newToDoList
    })
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>To-Do Item: </label>
            <input type="text" name="toDoItem" onChange={this.handleInputChange} value={this.state.toDoItem}></input>
          </div>
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.toDoList.map((toDo, index) => {
            console.log(toDo, index)
            return (
              <li key={index}>
                {toDo.toDoItem} <button>To-Do: Make this mark item complete</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const App = (props) => {
  return (
    <div className="container">
      <h1>To-Do!</h1>
      <ToDoForm/>
    </div>
  )
}