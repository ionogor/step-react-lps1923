import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

// rcep - shortcut pentru a crea o componenta de clasa
class TodoForm extends Component {
  state = {
    inputVal: "",
  };

  handleInputChange = (event) => {
    this.setState({ inputVal: event.target.value });
  };

  onClickAddTodo = () => {
    this.props.addNewTodo(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  render() {
    const { removeTodo } = this.props;

    return (
      <>
        <h1> My Todos:</h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <TextField
            color="secondary"
            focused
            type="text"
            label="Add todo..."
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <Button
            variant="contained"
            color="success"
            onClick={this.onClickAddTodo}
          >
            Add Todo
          </Button>
          <Button variant="outlined" color="error" onClick={removeTodo}>
            Remove Todo
          </Button>
        </form>
      </>
    );
  }
}

export default TodoForm;
