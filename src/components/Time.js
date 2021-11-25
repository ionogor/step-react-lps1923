import React, { Component } from "react";

class Time extends Component {
  static timeVal;

  state = {
    time: new Date().toLocaleTimeString(),
  };

  // setTimeout() -> cand expira timpul se executa
  //setInterval() -> 1000, el se executa la fiecare secunda

  componentDidMount() {
    this.timeVal = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeVal);
    console.log("COMPONENT WILL UNMOUNT!!!");
  }

  /*
    useEffect(()=>{
    const timeVal = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
    return ()=>{
        clearInterval(timeVal);
    }
    })
  */

  render() {
    return <h1>{this.state.time}</h1>;
  }
}

export default Time;
