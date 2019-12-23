import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themeDark";
import lightTheme from "../../themeLight";
import { Element } from "react-scroll";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";

const App: React.FC = () => {
  const [theme] = useState({});
  // eslint-disable-next-line
  const [palette, setPalette] = useState(
    window.__getTheme() === "dark" ? darkTheme : lightTheme
  );
  const [checked, setChecked] = useState(
    window.__getTheme() === "dark" ? false : true
  );
  const [themePref, setThemePref] = useState(window.__getTheme());
  const changeTheme = (checked: boolean) => {
    const _themePref = checked ? "light" : "dark";
    const _palette = themePref === "light" ? lightTheme : darkTheme;
    setChecked(checked);
    setThemePref(_themePref);
    setPalette(_palette);
    window.__setTheme(_themePref);
  };
  const classes: any = {};

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.app}>
        <Hero changeTheme={changeTheme} checked={checked} />
        <Element name="projects" className={classes.section}>
          <Projects />
        </Element>
        <Element className={classes.section}>
          <About />
        </Element>
      </div>
    </ThemeProvider>
  );
};

export default App;
