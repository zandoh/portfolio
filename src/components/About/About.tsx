import React, { Component } from "react";
import injectSheet from "react-jss";
import styles, { AboutClasses } from "./aboutStyles";
import { AppTheme } from "../../rootTheme";
import { ReactComponent as IconGithub } from "../../assets/github.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../assets/twitter.svg";
import { AppLink } from "../AppLink/AppLink";
import Avatar from "avataaars";

interface AboutProps {
  classes: AboutClasses;
  theme: AppTheme;
}

interface AboutState {}

const width: number = 50;
const height: number = 50;
const githubLink = "https://github.com/zandoh";
const linkedinLink = "https://www.linkedin.com/in/zrclark/";
const twitterLink = "https://twitter.com/Zandoh_";

class About extends Component<AboutProps, AboutState> {
  render() {
    const { classes, theme } = this.props;
    return (
      <section className={classes.aboutSection}>
        <div className={classes.descriptionContainer}>
          <h2 className={classes.title}>About Me.</h2>
          <p className={classes.description}>
            I'm an RIT graduate from Upstate, NY. I'm very passionate about web
            development and hockey. My favorite professional hockey team is the
            Pittsburgh Penguins. My favorite player is Evgeni Malkin.
          </p>
          <div className={classes.iconContainer}>
            <AppLink
              link={githubLink}
              title={"GitHub Profile"}
              child={
                <IconGithub
                  className={classes.svg}
                  width={width}
                  height={height}
                />
              }
            />
            <AppLink
              link={linkedinLink}
              title={"LinkedIn Profile"}
              child={
                <IconLinkedIn
                  className={classes.svg}
                  width={width}
                  height={height}
                />
              }
            />
            <AppLink
              link={twitterLink}
              title={"Twitter Profile"}
              child={
                <IconTwitter
                  className={classes.svg}
                  width={width}
                  height={height}
                />
              }
            />
          </div>
        </div>
        <div className={classes.avatarContainer}>
          <Avatar
            avatarStyle="Transparent"
            topType="ShortHairShortCurly"
            accessoriesType="Prescription02"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="Hoodie"
            clotheColor="Blue01"
            eyeType="Default"
            eyebrowType="DefaultNatural"
            mouthType="Default"
            skinColor="Pale"
          />
        </div>
      </section>
    );
  }
}

export default injectSheet(styles)(About);
