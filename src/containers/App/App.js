import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./appStyles";
import Sidebar from "../../components/Sidebar/Sidebar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <Sidebar styling={classes.sidebar} />
        <main className={classes.main}>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
          <h1>main</h1>
        </main>
      </div>
    );
  }
}

export default injectSheet(styles)(App);
