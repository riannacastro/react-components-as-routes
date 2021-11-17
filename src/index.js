import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);
