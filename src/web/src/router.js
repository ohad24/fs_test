import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation
} from "react-router-dom";
// import { App } from './App';
import { Home, 
  TechStack,
  BackendService1,
  App as App1
} from './pages'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/home" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Tech Stack" className="nav-link">Tech Stack</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/BackendService1" className="nav-link">Backend Service 1</NavLink>
            </li>
          </ul>
          </div>
        </nav>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route path="/Tech Stack">
            <TechStack />
          </Route>

          <Route path="/BackendService1">
            <App1 />
          </Route>

          <Route path="*">
            {/* <NoMatch /> */}
            <Redirect to="/home" />
          </Route>

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}