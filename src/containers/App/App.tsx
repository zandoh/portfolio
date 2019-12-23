import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "../../themeDark";
import lightTheme from "../../themeLight";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import { AppWrapper, AppSection, GlobalStyles } from "./styled";

const App: React.FC = () => {
  const [theme, setTheme] = useState({ palette: lightTheme });
  const [checked, setChecked] = useState(
    window.__getTheme() === "dark" ? false : true
  );
  const changeTheme = (checked: boolean) => {
    const themePref = checked ? "light" : "dark";
    const palette = checked ? lightTheme : darkTheme;
    setChecked(checked);
    setTheme({ ...theme, palette: palette });
    window.__setTheme(themePref);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppWrapper>
        <Hero changeTheme={changeTheme} checked={checked} />
        <AppSection name="projects">
          <Projects />
        </AppSection>
        <AppSection>
          <About />
        </AppSection>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
