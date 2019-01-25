import React, { Component } from "react";
import "./App.css";

class App extends Component {
  async componentDidMount() {
    const response = await fetch("/api/cities");
    const data = await response.json();

    console.log(data); // array of cities

    this.setState({
      cities: data
    });
  }
  render() {
    return <div className="App">{JSON.stringify(this.state)}</div>;
  }
}

export default App;
