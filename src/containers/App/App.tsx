import React, { Component } from "react";
import Main from "../../components/Main/Main";
import injectSheet, { ThemeProvider } from "react-jss";
import styles, { AppClasses } from "./appStyles";
import darkTheme, { ThemePaletteDark } from "../../themeDark";
import lightTheme, { ThemePaletteLight } from "../../themeLight";
import { AppTheme } from "../../rootStyles";

interface AppProps {
  theme: AppTheme;
  classes: AppClasses;
}

interface AppState {
  theme: AppTheme;
  palette: ThemePaletteDark | ThemePaletteLight;
  checked: boolean;
  themePref: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: this.props.theme,
      palette: darkTheme,
      checked: false,
      themePref: "dark"
    };
  }

  componentDidMount() {
    this.setState({
      themePref: window.__getTheme(),
      checked: window.__getTheme() === "light" ? true : false,
      palette: window.__getTheme() === "light" ? lightTheme : darkTheme
    });
  }

  changeTheme = (checked: boolean) => {
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
          <Main changeTheme={this.changeTheme} checked={this.state.checked} />
        </div>
      </ThemeProvider>
    );
  }
}

export default injectSheet(styles)(App);
