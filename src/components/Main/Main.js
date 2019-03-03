import React, { Component } from "react";
import injectSheet from "react-jss";
import styles from "./mainStyles";
import { Switch, Route } from "react-router-dom";
import List from "../List/List";
import Detail from "../Detail/Detail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const { styling, classes } = this.props;
    return (
      <main className={`${styling} ${classes.main}`}>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/wow" component={Detail} project="test" />
          <Route path="/labs" component={Detail} project="test" />
          <Route path="/quotr" component={Detail} project="test" />
          <Route component={List} />
        </Switch>
      </main>
    );
  };
}

export default injectSheet(styles)(Main);
