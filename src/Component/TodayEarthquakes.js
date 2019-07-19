import React, { Component } from "react";
import Axios from "axios";
import Earthquake from "./Earthquake";

class TodayEarthquakes extends Component {
  state = {
    todayEarthquakes: [],
    todayEarthquakesCount: 0,
    fecha: "2019-07-10"
  };

  componentDidMount() {
    Axios.get(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${
        this.state.fecha
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
    if (this.state.todayEarthquakes.length === 0) {
      // console.log(todayEarthquakes.name);
      return <h3>Cargando earthquakes...</h3>;
    } else {
      return <span>Hoy {this.state.todayEarthquakesCount} sismos</span>;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.allTodayEarthquakes()}
        {this.state.todayEarthquakes.map(value => {
        
          return (
            <Earthquake
            key={value.id}
            depth={value.geometry.coordinates[2]}
            id={value.properties.id}
            alert={value.properties.alert}
            detail={value.properties.url}
            felt={value.properties.felt}
            mag={value.properties.mag}
            magType={value.properties.magType}
            place={value.properties.place}
            time={value.properties.time}
            tsunami={value.properties.tsunami}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default TodayEarthquakes;
