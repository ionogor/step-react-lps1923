import React, { Component } from "react";
import Time from "./Time";

class FakeTodos extends Component {
  state = {
    fakeTodos: [],
    message: "",
  };

  // useEffect(()=>{}, [])
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ fakeTodos: json });
      });
    console.log("COMPONENT DID MOUNT!!");
  }

  // useEffect(()=>{}, [dependencies])
  componentDidUpdate() {
    if (this.state.message) {
      console.log("COMPONENT DID UPDATE!!");
    }
  }

  render() {
    return (
      <>
        <Time />
        <h2>{this.state.message}</h2>
        <button
          onClick={() => this.setState({ message: "Hello from Fake todos!" })}
        >
          ClickMe
        </button>
        {this.state.fakeTodos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              {todo.title}
            </div>
          );
        })}
      </>
    );
  }
}

export default FakeTodos;
