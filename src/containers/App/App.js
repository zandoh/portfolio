import React, { Component } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import injectSheet, { ThemeProvider } from "react-jss";
import styles from "./appStyles";
import darkTheme from "../../themeDark";
import lightTheme from "../../themeLight";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      palette: darkTheme
    };
  }

  componentDidMount() {
    this.setState({
      themePref: window.__getTheme(),
      checked: window.__getTheme() === "light" ? true : false,
      palette: window.__getTheme() === "light" ? lightTheme : darkTheme
    });
  }

  changeTheme = checked => {
    const themePref = checked ? "light" : "dark";
    const palette = themePref === "light" ? lightTheme : darkTheme;
    this.setState({
      checked,
      themePref,
      palette
    });
    window.__setTheme(themePref);
  };

  render() {
    const { classes } = this.props;
    const theme = {
      ...this.state.theme,
      palette: this.state.palette
    };
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.app}>
          <Sidebar
            changeTheme={this.changeTheme}
            checked={this.state.checked}
          />
          <Main />
        </div>
      </ThemeProvider>
    );
  }
}

export default injectSheet(styles)(App);
