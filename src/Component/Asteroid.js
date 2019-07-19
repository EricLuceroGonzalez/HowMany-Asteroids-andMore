import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button, Badge } from "reactstrap";
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
        <Badge color="danger" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_lunar)}
        </Badge>
      );
    }
    if (
      (this.state.miss_distance_lunar > 5) &
      (this.state.miss_distance_lunar < 8)
    ) {
      return (
        <Badge color="warning" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_lunar)}
        </Badge>
      );
    } else {
      return (
        <Badge color="success" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_lunar)}
        </Badge>
      );
    }
  };

  renderMissDistanceMoon = () => {
    if (this.state.miss_distance_km < 400000) {
      return (
        <Badge color="danger" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_km)} km
        </Badge>
      );
    }
    if (
      (this.state.miss_distance_km > 400000) &
      (this.state.miss_distance_km < 800000)
    ) {
      return (
        <Badge color="warning" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_km)} km
        </Badge>
      );
    } else {
      return (
        <Badge color="success" style={{ fontSize: "1.25em", padding: "8px" }}>
          {Math.floor(this.state.miss_distance_km)} km
        </Badge>
      );
    }
  };

  renderMinDiameter = () => {
    if (this.state.min_diameter_km < 1) {
      return (
        <Badge color="success" style={{ fontSize: "1.25em", padding: "8px" }}>
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
    if (this.state.min_diameter_km > 1 && this.state.min_diameter_km < 100) {
      return (
        <Badge color="warning" style={{ fontSize: "1.25em", padding: "8px" }}>
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    } else {
      return (
        <Badge color="danger" style={{ fontSize: "1.25em", padding: "8px" }}>
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
  };

  renderTimePass = () => {
    return this.state.date_full.slice(12);
  };

  render() {
    return (
      <Container
        style={{
          background: "rgba(105,242,41,0.75)",
          padding: "20px 12px",
          borderRadius: "14px",
          boxShadow: "2px 6px 6px gray",
          margin: "30px auto"
        }}
      >
        <span
          style={{
            padding: "5px",
            borderBottom: "4px solid red"
          }}
        >
          {this.state.name}
        </span>

        {this.renderMissDistance()}
        {this.renderMissDistanceMoon()}
        {this.renderMinDiameter()}
        {this.renderTimePass()}
        <ol style={{ border: "1pt solid red" }}>
          <li>maxdiam: {this.state.max_diameter_km}</li>
          <li>hazard: {this.state.hazarous}</li>
          <li>name: {this.state.name}</li>
          <li>id: {this.state.id}</li>
          <li>min: {this.state.min_diameter_km}</li>
          <li>dist: {this.state.miss_distance_km}</li>
          <li>date: {this.state.date_full}</li>
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
