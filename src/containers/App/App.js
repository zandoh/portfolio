import React, { Component } from "react";
import "./App.scss";

import Header from "../Header/Header";
import Projects from "../Projects/Projects";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Projects />
      </React.Fragment>
    );
  }
}

export default App;
