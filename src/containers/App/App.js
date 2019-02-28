import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./appStyles";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
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
        <Main styling={classes.main} />
      </div>
    );
  }
}

export default injectSheet(styles)(App);
