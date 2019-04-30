import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { MainClasses } from "./mainStyles";
import { Switch, Route } from "react-router-dom";
import List from "../List/List";
import Detail from "../Detail/Detail";

interface MainProps {
  classes: MainClasses;
}

interface MainState {}

class Main extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={`${classes.main}`}>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/wow" component={Detail} project="test" />
          <Route path="/labs" component={Detail} project="test" />
          <Route path="/quotr" component={Detail} project="test" />
          <Route component={List} />
        </Switch>
      </main>
    );
  }
}

export default injectSheet(styles)(Main);
