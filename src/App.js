import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import TodayAsteroids from "./Component/TodayAsteroids";
import TodayEarthquakes from "./Component/TodayEarthquakes";

function App() {
  return (
    <Router>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary navbar-fixed-top"
          style={{
            fontSize: "1.25em",
            boxShadow: "0px 4px 8px gray"
          }}
        >
          <span className="navbar-brand" href="#">
            The Navbar Component
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/TodayAsteroids"} className="nav-link">
                  Asteroids
                </Link>
              </li>
              <li>
                <Link to={"/TodayEarthquakes"} className="nav-link">
                  Earthquakes
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/TodayAsteroids" component={TodayAsteroids} />
          <Route path="/TodayEarthquakes" component={TodayEarthquakes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
