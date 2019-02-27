import React, { Component } from "react";
import avatar from "../../assets/avatar.jpg";
import injectSheet from "react-jss";
import styles from "./sidebarStyles";
import IconTwitter from "react-devicon/twitter/original";
import IconLinkedin from "react-devicon/linkedin/plain";
import IconGithub from "react-devicon/github/original";

function AppLink(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      {props.component}
    </a>
  );
}
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styling, classes } = this.props;
    const width = 50;
    const height = 50;
    const githubLink = "https://github.com/zandoh";
    const linkedinLink = "https://www.linkedin.com/in/zrclark/";
    const twitterLink = "https://twitter.com/Zandoh_";

    return (
      <aside className={`${styling} ${classes.sidebar}`}>
        <img
          className={classes.img}
          src={avatar}
          alt="self portrait of Zac Clark"
        />
        <h1 className={classes.title}>Zac Clark</h1>
        <p>
          Agile developer with a passion for software design, installation,
          testing and maintenance of web applications. Advocating for businesses
          to be more efficient and provide a better service through software
        </p>
        <div className={classes.iconContainer}>
          <AppLink
            link={githubLink}
            component={<IconGithub width={width} height={height} />}
          />
          <AppLink
            link={linkedinLink}
            component={<IconLinkedin width={width} height={height} />}
          />
          <AppLink
            link={twitterLink}
            component={<IconTwitter width={width} height={height} />}
          />
        </div>
      </aside>
    );
  }
}

export default injectSheet(styles)(Sidebar);
