import React, { Component } from "react";
import "./App.scss";
import Particles from "react-particles-js";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import {
  GlobalStyle,
  AppSection,
  themes
} from "../../components/Shared/Shared";
import { ThemeParticles } from "../../components/Shared/Util";
import { ThemeProvider } from "styled-components";
import { PaintBrush as ThemeChanger } from "styled-icons/fa-solid/PaintBrush";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes[0],
      index: 0
    };
  }

  changeTheme = () => {
    let { newTheme, nextIndex } = this.getNewTheme();
    this.setState({
      theme: newTheme,
      index: nextIndex
    });
  };

  getNewTheme = () => {
    let next = this.state.index + 1;
    let max = themes.length;
    let index = null;
    next === max ? (index = 0) : (index = next);
    return { newTheme: themes[index], nextIndex: index };
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <React.Fragment>
          <GlobalStyle />
          <ThemeChanger
            size="30"
            className="theme-changer"
            onClick={() => this.changeTheme()}
            style={{ color: `${this.state.theme.fontColor}` }}
          />
          <div className="particles-container">
            <Particles
              params={ThemeParticles(this.state.theme.particleColor)}
              width="100vw"
              height="100vh"
              style={{ background: `${this.state.theme.backgroundColor}` }}
            />
          </div>
          <AppSection>
            <Header theme={this.state.theme} />
          </AppSection>
          <AppSection flexDir="row">
            <Projects theme={this.state.theme} />
          </AppSection>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
