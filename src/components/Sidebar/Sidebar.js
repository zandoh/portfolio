import React, { Component } from "react";
import avatar from "../../assets/avatar.jpg";
import injectSheet from "react-jss";
import styles from "./sidebarStyles";
import { ReactComponent as IconGithub } from "../../assets/github.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../assets/twitter.svg";
import { ReactComponent as IconSun } from "../../assets/sun.svg";
import { ReactComponent as IconMoon } from "../../assets/moon.svg";
import Switch from "react-switch";

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
    this.state = {
      checked: false
    };
  }

  changeTheme = checked => {
    this.setState({ checked });
  };

  render = () => {
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
        <Switch
          onChange={this.changeTheme}
          checked={this.state.checked}
          uncheckedIcon={IconMoon}
          checkedIcon={IconSun}
        />
        <div className={classes.iconContainer}>
          <AppLink
            link={githubLink}
            component={<IconGithub width={width} height={height} />}
          />
          <AppLink
            link={linkedinLink}
            component={<IconLinkedIn width={width} height={height} />}
          />
          <AppLink
            link={twitterLink}
            component={<IconTwitter width={width} height={height} />}
          />
        </div>
      </aside>
    );
  };
}

export default injectSheet(styles)(Sidebar);
