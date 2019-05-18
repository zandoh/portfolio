import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { AboutClasses } from "./aboutStyles";
import { AppTheme } from "../../rootTheme";

interface AboutProps {
  classes: AboutClasses;
  theme: AppTheme;
}

interface AboutState {}

class About extends Component<AboutProps, AboutState> {
  render() {
    const { classes, theme } = this.props;
    return (
      <section className={classes.aboutSection}>
        <div className={classes.descriptionContainer}>
          <h2>About Me.</h2>
          <p>
            Praesent at laoreet libero, molestie euismod enim. Suspendisse
            pulvinar, erat vel tincidunt rutrum, leo nibh ornare orci, nec
            pulvinar sem diam at sem.
          </p>
        </div>
        <div className={classes.avatarContainer}>
          <img src="" alt="" />
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(About);
