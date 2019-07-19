import React, { Component } from "react";
import { Container } from "reactstrap";

class Earthquake extends Component {
  state = {
    id: this.props.id,
    alert: this.props.alert,
    detail: this.props.detail,
    felt: this.props.felt,
    mag: this.props.mag,
    magType: this.props.magType,
    place: this.props.place,
    time: this.props.time,
    tsunami: this.props.tsunami
  };
  render() {
    return (
      <Container>
        <ol>
          <li>{this.state.id}</li>
          <li>{this.state.alert}</li>
          <li>{this.state.detail}</li>
          <li>{this.state.felt}</li>
          <li>{this.state.mag}</li>
          <li>{this.state.magType}</li>
          <li>{this.state.place}</li>
          <li>{this.state.time}</li>
          <li>{this.state.tsunami}</li>
        </ol>
      </Container>
    );
  }
}

export default Earthquake;
