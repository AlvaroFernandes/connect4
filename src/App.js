import React, { Component } from "react";
import "./App.css";
import Board from "./component/Board";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Connect 4</h1>
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}
