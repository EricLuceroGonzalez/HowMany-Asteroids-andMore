import React, { Component } from "react";
import Axios from "axios";

class Counter extends Component {
     state = {
        todayCount: [],
        asteroidCount: 0,
        todayAsteroids: [],
        dateAsteroids: [],
        oneAsteroid: {},
        todayEarthquakes: [],
        // today: new Date(),
        date:
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate()
      };
    
      componentDidMount() {
        console.log(this.state.date);
    
        Axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${
            this.state.date
          }&api_key=xERxdQqz2PW9yLdg43sshxX2TUmnTY4YWd77WEG0`
        )
    
          .then(res => {
            // Pass the data
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

    render() { 
        return (  
            <div>
            {this.state.todayCount}
            </div>
        );
    }
}
 
export default Counter;