import React, { Component } from "react";
import avatar from "../../assets/avatar.jpg";
import injectSheet from "react-jss";
import styles, { SidebarClasses } from "./sidebarStyles";
import { ReactComponent as IconGithub } from "../../assets/github.svg";
import { ReactComponent as IconLinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as IconTwitter } from "../../assets/twitter.svg";
import Switch from "react-switch";
//@ts-ignore
import { AppLink } from "../Shared/shared"; // fix this

interface SidebarProps {
  classes: SidebarClasses;
  checked: boolean;
  changeTheme: (checked: boolean) => void;
}
class Sidebar extends Component<SidebarProps, {}> {
  render() {
    const { classes } = this.props;
    const width: number = 50;
    const height: number = 50;
    const githubLink = "https://github.com/zandoh";
    const linkedinLink = "https://www.linkedin.com/in/zrclark/";
    const twitterLink = "https://twitter.com/Zandoh_";
    const svgStyle = {
      height: "20px",
      width: "20px",
      position: "absolute" as "absolute",
      top: "6px",
      right: "4px"
    };

    return (
      <aside className={`${classes.sidebar}`}>
        <img
          className={classes.img}
          src={avatar}
          alt="self portrait of Zac Clark"
        />
        <h1 className={classes.title}>Zac Clark</h1>
        <p className={classes.summary}>
          Agile developer with a passion for software architecture, development,
          testing and maintenance of web applications.
        </p>
        <Switch
          onChange={this.props.changeTheme}
          offColor="#C0C0C0"
          onColor="#EEE8AA"
          checked={this.props.checked}
          uncheckedIcon={
            <svg viewBox="0 0 56 60" style={svgStyle}>
              <path d="M 31 4 C 19.414063 4 10 13.414063 10 25 C 10 36.585938 19.414063 46 31 46 C 33.988281 46 36.828125 45.367188 39.402344 44.242188 C 39.765625 44.082031 40 43.722656 40 43.324219 C 40 42.925781 39.765625 42.566406 39.402344 42.40625 C 32.695313 39.476563 28 32.796875 28 25 C 28 17.203125 32.695313 10.523438 39.402344 7.59375 C 39.765625 7.433594 40 7.074219 40 6.675781 C 40 6.277344 39.765625 5.917969 39.402344 5.757813 C 36.828125 4.632813 33.988281 4 31 4 Z M 31 6 C 32.984375 6 34.855469 6.398438 36.65625 6.96875 C 30.355469 10.59375 26 17.21875 26 25 C 26 32.78125 30.355469 39.40625 36.65625 43.03125 C 34.855469 43.601563 32.984375 44 31 44 C 20.496094 44 12 35.503906 12 25 C 12 14.496094 20.496094 6 31 6 Z " />
            </svg>
          }
          checkedIcon={
            <svg viewBox="0 0 56 60" style={svgStyle}>
              <path d="M 24.90625 3.96875 C 24.863281 3.976563 24.820313 3.988281 24.78125 4 C 24.316406 4.105469 23.988281 4.523438 24 5 L 24 11 C 23.996094 11.359375 24.183594 11.695313 24.496094 11.878906 C 24.808594 12.058594 25.191406 12.058594 25.503906 11.878906 C 25.816406 11.695313 26.003906 11.359375 26 11 L 26 5 C 26.011719 4.710938 25.894531 4.433594 25.6875 4.238281 C 25.476563 4.039063 25.191406 3.941406 24.90625 3.96875 Z M 10.65625 9.84375 C 10.28125 9.910156 9.980469 10.183594 9.875 10.546875 C 9.769531 10.914063 9.878906 11.304688 10.15625 11.5625 L 14.40625 15.8125 C 14.648438 16.109375 15.035156 16.246094 15.410156 16.160156 C 15.78125 16.074219 16.074219 15.78125 16.160156 15.410156 C 16.246094 15.035156 16.109375 14.648438 15.8125 14.40625 L 11.5625 10.15625 C 11.355469 9.933594 11.054688 9.820313 10.75 9.84375 C 10.71875 9.84375 10.6875 9.84375 10.65625 9.84375 Z M 39.03125 9.84375 C 38.804688 9.875 38.59375 9.988281 38.4375 10.15625 L 34.1875 14.40625 C 33.890625 14.648438 33.753906 15.035156 33.839844 15.410156 C 33.925781 15.78125 34.21875 16.074219 34.589844 16.160156 C 34.964844 16.246094 35.351563 16.109375 35.59375 15.8125 L 39.84375 11.5625 C 40.15625 11.265625 40.246094 10.800781 40.0625 10.410156 C 39.875 10.015625 39.460938 9.789063 39.03125 9.84375 Z M 24.90625 15 C 24.875 15.007813 24.84375 15.019531 24.8125 15.03125 C 24.75 15.035156 24.6875 15.046875 24.625 15.0625 C 24.613281 15.074219 24.605469 15.082031 24.59375 15.09375 C 19.289063 15.320313 15 19.640625 15 25 C 15 30.503906 19.496094 35 25 35 C 30.503906 35 35 30.503906 35 25 C 35 19.660156 30.746094 15.355469 25.46875 15.09375 C 25.433594 15.09375 25.410156 15.0625 25.375 15.0625 C 25.273438 15.023438 25.167969 15.003906 25.0625 15 C 25.042969 15 25.019531 15 25 15 C 24.96875 15 24.9375 15 24.90625 15 Z M 24.9375 17 C 24.957031 17 24.980469 17 25 17 C 25.03125 17 25.0625 17 25.09375 17 C 29.46875 17.050781 33 20.613281 33 25 C 33 29.421875 29.421875 33 25 33 C 20.582031 33 17 29.421875 17 25 C 17 20.601563 20.546875 17.035156 24.9375 17 Z M 4.71875 24 C 4.167969 24.078125 3.78125 24.589844 3.859375 25.140625 C 3.9375 25.691406 4.449219 26.078125 5 26 L 11 26 C 11.359375 26.003906 11.695313 25.816406 11.878906 25.503906 C 12.058594 25.191406 12.058594 24.808594 11.878906 24.496094 C 11.695313 24.183594 11.359375 23.996094 11 24 L 5 24 C 4.96875 24 4.9375 24 4.90625 24 C 4.875 24 4.84375 24 4.8125 24 C 4.78125 24 4.75 24 4.71875 24 Z M 38.71875 24 C 38.167969 24.078125 37.78125 24.589844 37.859375 25.140625 C 37.9375 25.691406 38.449219 26.078125 39 26 L 45 26 C 45.359375 26.003906 45.695313 25.816406 45.878906 25.503906 C 46.058594 25.191406 46.058594 24.808594 45.878906 24.496094 C 45.695313 24.183594 45.359375 23.996094 45 24 L 39 24 C 38.96875 24 38.9375 24 38.90625 24 C 38.875 24 38.84375 24 38.8125 24 C 38.78125 24 38.75 24 38.71875 24 Z M 15 33.875 C 14.773438 33.90625 14.5625 34.019531 14.40625 34.1875 L 10.15625 38.4375 C 9.859375 38.679688 9.722656 39.066406 9.808594 39.441406 C 9.894531 39.8125 10.1875 40.105469 10.558594 40.191406 C 10.933594 40.277344 11.320313 40.140625 11.5625 39.84375 L 15.8125 35.59375 C 16.109375 35.308594 16.199219 34.867188 16.039063 34.488281 C 15.882813 34.109375 15.503906 33.867188 15.09375 33.875 C 15.0625 33.875 15.03125 33.875 15 33.875 Z M 34.6875 33.875 C 34.3125 33.941406 34.011719 34.214844 33.90625 34.578125 C 33.800781 34.945313 33.910156 35.335938 34.1875 35.59375 L 38.4375 39.84375 C 38.679688 40.140625 39.066406 40.277344 39.441406 40.191406 C 39.8125 40.105469 40.105469 39.8125 40.191406 39.441406 C 40.277344 39.066406 40.140625 38.679688 39.84375 38.4375 L 35.59375 34.1875 C 35.40625 33.988281 35.148438 33.878906 34.875 33.875 C 34.84375 33.875 34.8125 33.875 34.78125 33.875 C 34.75 33.875 34.71875 33.875 34.6875 33.875 Z M 24.90625 37.96875 C 24.863281 37.976563 24.820313 37.988281 24.78125 38 C 24.316406 38.105469 23.988281 38.523438 24 39 L 24 45 C 23.996094 45.359375 24.183594 45.695313 24.496094 45.878906 C 24.808594 46.058594 25.191406 46.058594 25.503906 45.878906 C 25.816406 45.695313 26.003906 45.359375 26 45 L 26 39 C 26.011719 38.710938 25.894531 38.433594 25.6875 38.238281 C 25.476563 38.039063 25.191406 37.941406 24.90625 37.96875 Z " />
            </svg>
          }
          aria-label="Switch to toggle between light and dark themes"
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
  }
}

export default injectSheet(styles)(Sidebar);
