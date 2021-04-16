import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="navbar">
          <table>
            <tr>
              <td>
                <Link className="link" to="/">
                  <h1 className="big-header">Trackr</h1>
                </Link>
              </td>
              <td>
                <Link className="link" to="/about">
                  <h4 className="about">About</h4>
                </Link>
              </td>
            </tr>
          </table>
        </div>
        <div className="blank-space"></div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
