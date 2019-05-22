import React, { Component } from "react";
import injectSheet, { ThemeProvider } from "react-jss";
import styles, { AppClasses } from "./appStyles";
import darkTheme, { ThemePaletteDark } from "../../themeDark";
import lightTheme, { ThemePaletteLight } from "../../themeLight";
import { AppTheme } from "../../rootTheme";
import { Element } from "react-scroll";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

interface AppProps {
  theme: AppTheme;
  classes: AppClasses;
}

interface AppState {
  theme: AppTheme;
  palette: ThemePaletteLight | ThemePaletteDark;
  checked: boolean;
  themePref: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      theme: this.props.theme,
      palette: lightTheme,
      checked: true,
      themePref: "light"
    };
  }

  componentDidMount() {
    this.setState({
      themePref: window.__getTheme(),
      checked: window.__getTheme() === "dark" ? false : true,
      palette: window.__getTheme() === "dark" ? darkTheme : lightTheme
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
          <Hero changeTheme={this.changeTheme} checked={this.state.checked} />
          <Element name="projects" className={classes.section}>
            <Projects />
          </Element>
          {/* <Element className={classes.section}>
            <About />
          </Element> */}
        </div>
      </ThemeProvider>
    );
  }
}

export default injectSheet(styles)(App);
