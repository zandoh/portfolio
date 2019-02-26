import React, { Component } from "react";
import avatar from "../../assets/avatar.jpg";
import injectSheet from "react-jss";
import styles from "./sidebarStyles";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styling, classes } = this.props;
    return (
      <aside className={`${styling} ${classes.sidebar}`}>
        <img
          className={classes.img}
          src={avatar}
          alt="self portrait of Zac Clark"
        />
        <h1 className={classes.title}>Zac Clark</h1>
      </aside>
    );
  }
}

export default injectSheet(styles)(Sidebar);
