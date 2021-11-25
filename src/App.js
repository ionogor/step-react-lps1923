import { Component } from "react";
import FakeTodos from "./components/FakeTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCALSTORAGE_KEY = "todos";

class App extends Component {
  constructor() {
    super();
    const lsItems = localStorage.getItem(LOCALSTORAGE_KEY);

    this.state = {
      todos: lsItems ? JSON.parse(lsItems) : [],
      isButtonClicked: false,
    };
  }

  manageLocalStorage = (todoList) => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(todoList));
    this.setState({ todos: todoList });
  };

  // const [todos, setTodos]= useState([ {test:"", id: Date.now(), completed:false} ])

  addNewTodo = (val) => {
    const newTodos = [
      ...this.state.todos,
      {
        text: val,
        id: Date.now(),
        completed: false,
      },
    ];
    this.manageLocalStorage(newTodos);
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

    this.manageLocalStorage(updatedTodos);
  };

  removeTodo = () => {
    const filteredTodos = this.state.todos.filter((el) => {
      return el.completed === false;
    });

    this.manageLocalStorage(filteredTodos);
  };

  render() {
    console.log("input:", this.state.inputVal);
    console.log("todos: ", this.state.todos);
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({ isButtonClicked: !this.state.isButtonClicked })
          }
        >
          {!this.state.isButtonClicked ? "Show Fake Todos" : "Show My Todos"}
        </button>

        {this.state.isButtonClicked ? (
          <FakeTodos />
        ) : (
          <>
            <TodoForm
              addNewTodo={this.addNewTodo}
              removeTodo={this.removeTodo}
            />
            <TodoList
              todos={this.state.todos}
              markComleted={this.markComleted}
            />
          </>
        )}
      </div>
    );
  }
}

export default App;
