import React, { Component } from "react";
import { Container, Badge } from "reactstrap";
import "./NumberStyles.css";

class Asteroid extends Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    url: this.props.url,
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
          style={{ fontSize: "0.84em", padding: "8px", width: "4em" }}
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
          style={{ fontSize: "0.84em", padding: "8px", width: "4em" }}
        >
          {Math.round(this.state.miss_distance_lunar)}
        </Badge>
      );
    } else {
      return (
        <Badge
          color="success"
          style={{ fontSize: "0.84em", padding: "4px", width: "4em" }}
        >
          {Math.round(this.state.miss_distance_lunar)}
        </Badge>
      );
    }
  };

  renderMissDistanceMoon = () => {
    if (this.state.miss_distance_km < 400000) {
      return (
        <Badge color="danger" style={{ fontSize: "0.75em", padding: "8px" }}>
          {Math.round(this.state.miss_distance_km)} km
        </Badge>
      );
    }
    if (
      (this.state.miss_distance_km > 400000) &
      (this.state.miss_distance_km < 800000)
    ) {
      return (
        <Badge color="warning" style={{ fontSize: "0.75em", padding: "8px" }}>
          {Math.round(this.state.miss_distance_km)} km
        </Badge>
      );
    } else {
      return (
        <Badge color="success" style={{ fontSize: "0.75em", padding: "8px" }}>
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
          style={{ fontSize: "0.84em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
    if (this.state.min_diameter_km > 5 && this.state.min_diameter_km < 50) {
      return (
        <Badge
          color="warning"
          style={{ fontSize: "0.84em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    } else {
      return (
        <Badge
          color="danger"
          style={{ fontSize: "0.84em", padding: "8px", width: "5em" }}
        >
          {this.state.min_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
  };

  renderMaxDiameter = () => {
    if (this.state.max_diameter_km < 1) {
      return (
        <Badge color="success" style={{ fontSize: "0.84em", padding: "8px" }}>
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
    if (this.state.max_diameter_km > 1 && this.state.max_diameter_km < 100) {
      return (
        <Badge color="warning" style={{ fontSize: "0.84em", padding: "8px" }}>
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    } else {
      return (
        <Badge color="danger" style={{ fontSize: "0.84em", padding: "8px" }}>
          {this.state.max_diameter_km.toFixed(1)} km
        </Badge>
      );
    }
  };

  renderSpeed = () => {
    return (
      <Badge color="primary" style={{ fontSize: "0.85em", padding: "8px" }}>
        {Math.round(this.state.velocity_perSecond)} km/s
      </Badge>
    );
  };

  renderTimePass = () => {
    return <Badge color="primary">{this.state.date_full.slice(12)}</Badge>;
  };
  renderOrbit = () => {
    return <Badge color="primary">{this.state.orbiting_body}</Badge>;
  };

  render() {
    return (
      <Container
        className="col-md-8 col-sm-10 col-xs-10"
        style={{
          background: "rgba(105,242,41,0.75)",
          padding: "10px 10px",
          borderRadius: "14px",
          boxShadow: "2px 6px 6px gray",
          margin: "30px auto"
        }}
      >
        <div className="col-md-6">
          <div style={{ fontSize: "0.76em" }}>Name</div>
          <Badge
            color="dark"
            style={{
              margin: "-1px 2px 8px ",
              padding: "8px",
              fontSize: "2em"
            }}
          >
            {this.state.name}
          </Badge>
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
        <div className="row mt-3" style={{ margin: "12px auto" }}>
          <div className="col-4">
            {this.renderMissDistance()}
            <div style={{ fontSize: "0.84em" }}>Moon distance</div>
          </div>
          <div className="col-4">
            {this.renderTimePass()}
            <div style={{ fontSize: "0.84em" }}>Daytime</div>
          </div>
          <div className="col-4">
            {this.renderOrbit()}
            <div style={{ fontSize: "0.84em" }}>Orbit</div>
          </div>
        </div>
        <Container>
          <Badge>
            <a href={this.state.url} target="_blank" style={{ color: "white" }}>
              {" "}
              More info
            </a>
          </Badge>
        </Container>
      </Container>
    );
  }
}

export default Asteroid;
