import React, { Component } from "react";
import TodayAsteroids from "./TodayAsteroids";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <TodayAsteroids></TodayAsteroids>
      </div>
    );
  }
}

export default Home;
