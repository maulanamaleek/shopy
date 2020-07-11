import React from "react";
import Products from "./products/Products";
import About from "./About";
import Cart from "./Cart";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
      <div className="nav-container">
        <h1>Shopy.</h1>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Products</Link>
          </li>

          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="switch-item">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}
