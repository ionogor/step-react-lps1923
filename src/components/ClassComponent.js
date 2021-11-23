import React from "react";
import { Component } from "react";

class ClassComponent extends Component {
  state = {
    message: "",
    counter: 0,
  };

  /**
   * useEffect(()=>{}) -> componentDidMount(){}
   * useEffect(()=>{}, [dep]) -> componentDidUpdate(){}
   * useEffect(()=>{  return fn }, [dep]) -> componentWillUnmount(){}
   *
   */

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    // console.log("this.state.counter", this.state.counter);
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.setState({ message: "Hello World!!" })}>
          Say Hi!
        </button>
        <div>{this.state.counter}</div>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
