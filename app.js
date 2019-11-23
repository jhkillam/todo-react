

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
  taskDone(index) {
    const newToDoList = [...this.state.toDoList]
    newToDoList[index].isComplete = !newToDoList[index].isComplete
    this.setState({ toDoList: newToDoList })
    console.log(newToDoList)
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
            // console.log(toDo, index)
            if (!toDo.isComplete) {
              return (
                <li key={index}>
                  {toDo.toDoItem} <button onClick={() => { this.taskDone(index) }}>Done</button>
                </li>
              )
            }
            
          })}
        </ul>
        <div>
          <h2>Completed Items</h2>
          <ul>
          {this.state.toDoList.map((toDo, index) => {
            // console.log(toDo, index)
            if (toDo.isComplete) {
              return (
                <li key={index}>
                  {toDo.toDoItem}
                </li>
              )
            }
          })}
        </ul>
        </div>
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