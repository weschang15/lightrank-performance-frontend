import React, { Component } from "react";
import Pusher from "pusher-js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount = () => {
    const pusher = new Pusher("428396da0516ba8fea1f", {
      cluster: "us2",
      forceTLS: true
    });

    const channel = pusher.subscribe("reports");
    channel.bind("ReportUpdated", function(data) {
      console.log(data);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
