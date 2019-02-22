import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./appStyles";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <aside className={classes.sidebar}>
          <h1>sidebar</h1>
        </aside>
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
