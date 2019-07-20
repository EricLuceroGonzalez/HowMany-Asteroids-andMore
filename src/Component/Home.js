import React, { Component } from "react";
import Axios from "axios";
import { Container, Badge } from "reactstrap";
import TodayEarthquakes from "./TodayEarthquakes";
import TodayAsteroids from "./TodayAsteroids";
import Counter from "./Counter";

class Home extends Component {
  state = {
    todayCount: [],
    asteroidCount: 0,
    todayAsteroids: [],
    dateAsteroids: [],
    oneAsteroid: {},
    todayEarthquakes: []
  };

  componentWillMount() {
    if (new Date().getMonth() < 9) {
      this.setState({
        date:
          new Date().getFullYear() +
          "-" +
          "0" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
      });
    } else {
      this.setState({
        date:
          new Date().getFullYear() +
          "-" +
          +(new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
      });
    }
  }

  componentDidMount() {
    console.log(this.state.date);

    Axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${
        this.state.date
      }&api_key=xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0`
    )

      .then(res => {
        // Pass the data
        // console.log(res.data);
        // console.log(res.data.near_earth_objects);
        // console.log(res.data.near_earth_objects[this.state.date].length);
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

    Axios.get(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${
        this.state.date
      }&minmagnitude=5`
    )
      .then(res => {
        // Pass the data
        console.log(res.data.features);

        this.setState({
          todayEarthquakes: res.data.features,
          todayEarthquakesCount: res.data.features.length
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(function() {
        // always executed
      });
  }

  allTodayEarthquakes = () => {
    if (this.state.todayEarthquakesCount === 0) {
      // console.log(todayEarthquakes.name);
      return <h3>Cargando earthquakes...</h3>;
    } else {
      return (
        <Badge
          style={{
            margin: "12px auto",
            boxShadow: "2px 5px 4px gray",
            padding: "5px 10px",
            background: "rgba(10,50,255,0.75)",
            fontSize: "8em",
            width: "2em"
          }}
        >
          {this.state.todayEarthquakesCount}
        </Badge>
      );
    }
  };

  renderAsteroides = () => {
    if (this.state.todayCount === 0) {
      return <h2>Cargando Asteroides</h2>;
    } else {
      return (
        <Badge
          style={{
            margin: "12px auto",
            boxShadow: "2px 5px 4px gray",
            padding: "5px 10px",
            background: "rgba(10,50,255,0.75)",
            fontSize: "8em",
            width: "2em"
          }}
        >
          {this.state.todayCount}
        </Badge>
      );
    }
  };

  render() {
    return (
      <Container>
        <div style={{ margin: "10px auto" }}>
          <div
            className="row col-8 mt-4"
            style={{
              margin: "10px auto",
              border: "2px solid red"
            }}
          >
            <div className="col-6">
              <div>Earthquakes today:</div>
              {this.allTodayEarthquakes()}
            </div>
            <div className="col-6">
              <div>Asteroids today:</div>
              {this.renderAsteroides()}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
