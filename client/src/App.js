import React, { Component } from "react";
import "./App.css";
import { first, last, lower, splitBy } from "../../lib/util";

class App extends Component {
  state = {};

  async componentDidMount() {
    const response = await fetch("/api/cities");
    const data = await response.json();

    console.log(data); // array of cities

    this.setState({
      cities: data
    });
  }

  handleChangeCity = e => {
    console.log(e.target.value, first);
  };

  render() {
    if (!this.state.cities) {
      return <div>Loading...</div>;
    }

    return (
      <div style={{ padding: "45px" }}>
        <select onChange={this.handleChangeCity}>
          {this.state.cities.map(cityData => {
            return (
              <option key={cityData.id}>{`${cityData.city}, ${
                cityData.region
              }`}</option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default App;
