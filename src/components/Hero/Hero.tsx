import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { HeroClasses } from "./heroStyles";
import { AppTheme } from "../../rootTheme";
import video from "../../assets/sea.mp4";
import { Link } from "react-scroll";

interface HeroProps {
  classes: HeroClasses;
  checked: boolean;
  changeTheme: (checked: boolean) => void;
  theme: AppTheme;
}

interface HeroState {}

class Hero extends Component<HeroProps, HeroState> {
  render() {
    const { classes, theme } = this.props;
    return (
      <section className={classes.mainSection}>
        <video
          autoPlay
          muted
          loop
          className={`${classes.video} ${classes.parallax}`}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className={`${classes.heroContainer} ${classes.parallax} `}>
          <div className={classes.copyContainer}>
            <h1 className={classes.tagLine}>
              Hello, I'm <span className={classes.contrastText}>Zac.</span>
            </h1>
            <p className={classes.description}>
              An agile{" "}
              <span className={classes.contrastText}>software engineer</span>{" "}
              and{" "}
              <span className={classes.contrastText}>javascript developer</span>{" "}
              based in New York
            </p>
            <Link to="projects" smooth={true} duration={500}>
              <i
                className={`${
                  classes.arrow
                } animated infinite bounce far fa-arrow-alt-down fa-2x`}
              />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(Hero);
