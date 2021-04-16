import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function About() {
  return (
    <div>
      <React.Fragment>
        <div className="card">
          <h1 className="about-header">About Trackr</h1>
          <p className="description">
            Trackr is a task tracking application built using ReactJS (frontend)
            and Flask (backend). You can run this locally to track your
            mountains of work.
          </p>
        </div>
        <div className="card">
          <h1 className="about-header">Creator</h1>
          <p className="description">
            Hello. I am Atharva Tawde. I created this wonderful application.
            Visit my{" "}
            <a href="https://github.com/AtharvaTawde/trackr" target="_blank">
              Github
            </a>{" "}
            if you want to contribute to or criticize my work. You can wander
            over there to give me ideas for new features you would like to see
            implemented. The idea is to take a mundane todo list application and
            turn it into something quite special.
          </p>
          <p className="description">Nice.</p>
          <Link to="/">
            <button className="addButton">Take me back to Trackr.</button>
          </Link>
        </div>
      </React.Fragment>
    </div>
  );
}

export default About;
