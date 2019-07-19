import React, { Component } from "react";
import { Container, Badge } from "reactstrap";
import Moment from "react-moment";

class Earthquake extends Component {
  state = {
    id: this.props.id,
    depth: this.props.depth,
    alert: this.props.alert,
    detail: this.props.detail,
    felt: this.props.felt,
    mag: this.props.mag,
    magType: this.props.magType,
    place: this.props.place,
    time: this.props.time,
    tsunami: this.props.tsunami
  };

  renderEqMagnitude = () => {
    if (this.state.alert === "green") {
      return (
        <div className="col-sm-4 col-xs-4 col-md-4">
          <div style={{ borderBottom: "5px solid green", fontSize: "1.75em" }}>
            {this.state.mag}
            <span
              className="ml-1"
              style={{ display: "inline", fontSize: "0.85em" }}
            >
              {this.state.magType}
            </span>
          </div>
        </div>
      );
    }
    if (this.state.alert === "yellow") {
      return (
        <div className="col-sm-4 col-xs-4 col-md-4">
          <div style={{ borderBottom: "5px solid yellow", fontSize: "1.75em" }}>
            {this.state.mag}
            <span
              className="ml-1"
              style={{ display: "inline", fontSize: "0.85em" }}
            >
              {this.state.magType}
            </span>
          </div>
        </div>
      );
    }
    if (this.state.alert === "red") {
      return (
        <div className="col-sm-4 col-xs-4 col-md-4">
          <div style={{ borderBottom: "5px solid red", fontSize: "1.75em" }}>
            {this.state.mag}
            <span style={{ display: "inline", fontSize: "0.75em" }}>
              {this.state.magType}
            </span>
          </div>
        </div>
      );
    }
    {
      return (
        <div className="col-sm-4 col-xs-4 col-md-4">
          <div style={{ borderBottom: "5px solid blue", fontSize: "1.75em" }}>
            {this.state.mag}
            <span
              className="ml-1"
              style={{ display: "inline", fontSize: "0.85em" }}
            >
              {this.state.magType}
            </span>
          </div>
        </div>
      );
    }
  };

  renderEqPlace = () => {
    return (
      <div className="col-md-8" style={{ fontSize: "1.5em" }}>
        {this.state.place}
      </div>
    );
  };

  giveAll = () => {
    return (
      <div style={{margin: '24px auto'}}>
        <Container className="row">
          {this.renderEqMagnitude()}
          {this.renderEqPlace()}
        </Container>
        <Container className="row">
          <div className="col-4">Tsunami Alerts: {this.state.tsunami}</div>
          <div className="col-4">Depth: {this.state.depth} km</div>
        </Container>
        <Container>
          <Badge>
            <a href={this.state.detail} style={{color: 'white'}}> More info</a>
          </Badge>
        </Container>
        {/**<Moment format="YYYY/MM/DD">{this.state.time}</Moment> */}
      </div>
    );
  };

  renderAll = () => {
    if (this.state.mag > 7) {
      return (
        <div
          style={{
            background: "rgba(245,0,10,0.65)",
            boxShadow: "3px 6px 4px gray"
          }}
        >
          {this.giveAll()}
        </div>
      );
    }
    if (this.state.mag > 5 && this.state.mag < 5.3) {
      return (
        <div
          style={{
            background: "rgba(255,225,10,0.65)",
            boxShadow: "3px 6px 4px gray"
          }}
        >
          {this.giveAll()}
        </div>
      );
    }
    if (this.state.mag > 5.3 && this.state.mag < 6) {
      return (
        <div
          style={{
            background: "rgba(255,155,80,0.85)",
            boxShadow: "3px 6px 4px gray"
          }}
        >
          {this.giveAll()}
        </div>
      );
    }
    if (this.state.mag < 5) {
      return (
        <div
          style={{
            background: "rgba(0,225,10,0.65)",
            boxShadow: "3px 6px 4px gray"
          }}
        >
          {this.giveAll()}
        </div>
      );
    }
  };

  render() {
    return (
      <Container className="col-md-8 col-xs-10">{this.renderAll()}</Container>
    );
  }
}

export default Earthquake;
