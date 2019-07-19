import React, { Component } from "react";
import { Container, Badge } from "reactstrap";
import "./NumberStyles.css";

class Asteroid extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    hazarous: this.props.hazarous,
    max_diameter_km: this.props.max_diameter_km,
    min_diameter_km: this.props.min_diameter_km,
    miss_distance_km: this.props.miss_distance_km,
    miss_distance_lunar: this.props.miss_distance_lunar,
    orbiting_body: this.props.orbiting_body,
    date_full: this.props.date_full,
    velocity_perSecond: this.props.velocity_perSecond
  };

  renderMissDistance = () => {
    if (this.state.miss_distance_lunar < 5) {
      return (
        <Badge
          color="danger"
          style={{ fontSize: "1.25em", padding: "8px", width: "4em" }}
        >
          {Math.round(this.state.miss_distance_lunar)}
        </Badge>
      );
    }
    if (
      (this.state.miss_distance_lunar > 5) &
      (this.state.miss_distance_lunar < 8)
    ) {
      return (
        <Badge
          color="warning"
          style={{ fontSize: "1.25em", padding: "8px", width: "4em" }}
        >
          {Math.round(this.state.miss_distance_lunar)}
        </Badge>
      );
    } else {
      return (
        <Badge
          color="success"
          style={{ fontSize: "1.25em", padding: "4px", width: "4em" }}
        >
          {Math.round(this.state.miss_distance_lunar)}
        </Badge>
      );
    }
  };

  renderMissDistanceMoon = () => {
    if (this.state.miss_distance_km < 400000) {
      return (
        <Badge color="danger" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.round(this.state.miss_distance_km)} km
        </Badge>
      );
    }
    if (
      (this.state.miss_distance_km > 400000) &
      (this.state.miss_distance_km < 800000)
    ) {
      return (
        <Badge color="warning" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.round(this.state.miss_distance_km)} km
        </Badge>
      );
    } else {
      return (
        <Badge
          color="success"
          style={{ fontSize: "1.25em", padding: "8px" }}
        >
          {Math.round(this.state.miss_distance_km)} km
        </Badge>
      );
    }
  };

  renderMinDiameter = () => {
    if (this.state.min_diameter_km < 5) {
      return (
        <Badge
          color="success"
          style={{ fontSize: "1.25em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
    if (this.state.min_diameter_km > 5 && this.state.min_diameter_km < 50) {
      return (
        <Badge
          color="warning"
          style={{ fontSize: "1.25em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    } else {
      return (
        <Badge
          color="danger"
          style={{ fontSize: "1.25em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
  };

  renderMaxDiameter = () => {
    if (this.state.max_diameter_km < 1) {
      return (
        <Badge
          color="success"
          style={{ fontSize: "1.25em", padding: "8px" }}
        >
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
    if (this.state.max_diameter_km > 1 && this.state.max_diameter_km < 100) {
      return (
        <Badge color="warning" style={{ fontSize: "1.25em", padding: "8px" }}>
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    } else {
      return (
        <Badge color="danger" style={{ fontSize: "1.25em", padding: "8px" }}>
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
  };

  renderSpeed = () => {
    return (
      <Badge color="primary" style={{ fontSize: "1.25em", padding: "8px" }}>
        {Math.round(this.state.velocity_perSecond)} km/s
      </Badge>
    );
  };

  renderTimePass = () => {
    return this.state.date_full.slice(12);
  };

  render() {
    return (
      <Container
        style={{
          background: "rgba(105,242,41,0.75)",
          padding: "10px 6px",
          borderRadius: "14px",
          boxShadow: "2px 6px 6px gray",
          margin: "30px auto"
        }}
      >
        <div className="col-md-12">
          <Badge
            color="info"
            style={{
              margin: "8px auto",
              padding: "8px",
              fontSize: "2em"
            }}
          >
            {this.state.name}
          </Badge>
        </div>
        <div>
          <div className="col-2">
            {this.renderMissDistance()}
            <div style={{ fontSize: "0.74em" }}>Moon distance</div>
          </div>
        </div>
        <div className="row">
          <div className="col-3 col-sm-3 col-xs-3">
            {this.renderMinDiameter()}
            <div style={{ fontSize: "0.6em" }}>Minimun diameter</div>
          </div>
          <div className="col-3 col-sm-3 col-xs-3">
            {this.renderMaxDiameter()}
            <div style={{ fontSize: "0.6em" }}>Maximun diameter</div>
          </div>
          <div className="col-3 col-sm-4 col-xs-3">
            {this.renderMissDistanceMoon()}
            <div style={{ fontSize: "0.6em" }}>Distance</div>
          </div>
          <div className="col-2 col-sm-2 col-xs-3"> 
            {this.renderSpeed()}
            <div style={{ fontSize: "0.6em" }}>Maximun diameter</div>
          </div>
        </div>
        {this.renderTimePass()}
        <ol style={{ border: "1pt solid red" }}>
          <li>speed: {this.state.velocity_perSecond}</li>
          <li>orbits: {this.state.orbiting_body}</li>
        </ol>
        <div
          className="col-12"
          style={{
            backgroundColor: "red"
          }}
        >
          .
        </div>
      </Container>
    );
  }
}

export default Asteroid;
