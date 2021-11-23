import { Component } from "react";
import ClassComponent from "./components/ClassComponent";

class App extends Component {
  state = {
    todos: [],
    inputVal: "",
  };

  // const [todos, setTodos]= useState([ {test:"", id: Date.now(), completed:false} ])

  handleInputChange = (event) => {
    this.setState({ inputVal: event.target.value });
  };

  addNewTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.inputVal,
          id: Date.now(),
          completed: false,
        },
      ],
    });

    this.setState({ inputVal: "" });
  };

  markComleted = (id) => {
    const updatedTodos = this.state.todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed: !el.completed,
        };
      }
      return el;
    });

    this.setState({ todos: updatedTodos });
  };

  removeTodo = () => {
    const filteredTodos = this.state.todos.filter((el) => {
      return el.completed === false;
    });

    this.setState({ todos: filteredTodos });
  };

  render() {
    console.log("input:", this.state.inputVal);
    console.log("todos: ", this.state.todos);
    return (
      <div className="App">
        {/* <ClassComponent /> */}
        <h1> My Todos:</h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Add todo..."
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addNewTodo}>Add Todo</button>
          <button onClick={this.removeTodo}>Remove Todo</button>
        </form>

        {this.state.todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.markComleted(todo.id)}
              />
              {todo.text}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
