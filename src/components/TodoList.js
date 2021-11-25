import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todos, markComleted } = this.props;
    return (
      <>
        {todos.map((todo) => {
          return <Todo todo={todo} markComleted={markComleted} key={todo.id} />;
        })}
      </>
    );
  }
}

export default TodoList;
