import React, { Component } from "react";
import Moment from "moment";
import Axios from "axios";
import Asteroid from "./Asteroid";
import { throwStatement } from "@babel/types";
import AnimateNumber from "./AnimateNumber";

class TodayAsteroids extends Component {
  state = {
    todayCount: 0,
    asteroidCount: 0,
    todayAsteroids: [],
    dateAsteroids: [],
    oneAsteroid: {},
    date: "2019-07-10"
  };

  componentDidMount() {
    Axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${
        this.state.date
      }&api_key=xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0`
    )

      .then(res => {
        // Pass the data
        console.log(res.data);
        console.log(res.data.near_earth_objects);
        console.log(res.data.near_earth_objects[this.state.date]);
        this.setState({
          todayCount: res.data.near_earth_objects[this.state.date].length,
          todayAsteroids: res.data,
          dateAsteroids: res.data.near_earth_objects[this.state.date]
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(function() {
        // always executed
      });
  }

  renderAsteroides = () => {
    if (this.state.todayAsteroids.length === 0) {
      return <h2>Cargando Asteroides</h2>;
    } else {
      return <h2>{this.state.todayCount} ast...</h2>;
    }
  };

  renderAsteroidCount = () => {
    for (let i = 0; i < this.state.todayCount; i++) {
      console.log(i);
      return i;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.renderAsteroides()}
        {this.state.date}
        {/*<AnimateNumber number={10} speed={100} /> */}
        {this.state.dateAsteroids.map(value => {
          return (
            <Asteroid
              key={value.id}
              id={value.id}
              
              name={value.name}
              hazarous={value.is_potentially_hazardous_asteroid}
              max_diameter_km={
                value.estimated_diameter.meters.estimated_diameter_max
              }
              min_diameter_km={
                value.estimated_diameter.meters.estimated_diameter_min
              }
              miss_distance_km={
                value.close_approach_data["0"].miss_distance.kilometers
              }
              miss_distance_lunar={
                value.close_approach_data["0"].miss_distance.lunar
              }
              orbiting_body={value.close_approach_data["0"].orbiting_body}
              date_full={
                value.close_approach_data["0"].close_approach_date_full
              }
              velocity_perSecond={
                value.close_approach_data["0"].relative_velocity
                  .kilometers_per_second
              }
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default TodayAsteroids;
