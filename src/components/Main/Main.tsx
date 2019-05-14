import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { MainClasses } from "./mainStyles";
import { AppTheme } from "../../rootStyles";
import video from "../../assets/sea.mp4";

interface MainProps {
  classes: MainClasses;
  checked: boolean;
  changeTheme: (checked: boolean) => void;
  theme: AppTheme;
}

interface MainState {}

class Main extends Component<MainProps, MainState> {
  render() {
    const { classes, theme } = this.props;
    return (
      <React.Fragment>
        <video autoPlay muted loop className={classes.video}>
          <source src={video} type="video/mp4" />
        </video>
        <main className={classes.mainContainer}>
          <h1>I'm Zac</h1>
        </main>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Main);
