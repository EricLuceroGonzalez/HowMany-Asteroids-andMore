import React, { Component } from "react";
import Axios from "axios";

class TodayAsteroids extends Component {
  state = {
    todayAsteroids: []
  };

  componentDidMount() {
    // Build the API

    // **** GET: Make a request for a user with a given ID
    // .get("https://devf-musica.herokuapp.com/api/v1/artista")

    Axios.get(
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-07-17&api_key=xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0"
    )
      .then(res => {
        // Pass the data
        console.log(res.data);

        this.setState({
          todayAsteroids: res.data
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
      // console.log(todayAsteroids.name);
      return <h2>Cargando Asteroides</h2>;
    } else {
      return (
        <h2>
          Se han cargado {this.state.todayAsteroids.element_count} asteroides
        </h2>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderAsteroides()}</React.Fragment>;
  }
}

export default TodayAsteroids;
