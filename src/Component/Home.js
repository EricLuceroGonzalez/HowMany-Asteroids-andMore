import React, { Component } from "react";
import TodayAsteroids from "./TodayAsteroids";
import TodayEarthquakes from "./TodayEarthquakes";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Home Component</h1>
{/*        <TodayAsteroids></TodayAsteroids>*/}
        <TodayEarthquakes></TodayEarthquakes> 

      </div>
    );
  }
}

export default Home;
