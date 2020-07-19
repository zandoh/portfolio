import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
=======
import App from "./containers/App/App";
import { ThemeProvider } from "styled-components";
import theme from "./rootTheme";
import * as serviceWorker from "./serviceWorker";
import "animate.css/animate.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltDown } from "@fortawesome/pro-regular-svg-icons";
import { GlobalStyles } from "./containers/App/styled";

library.add(faArrowAltDown);

declare global {
  interface Window {
    __getTheme(): string;
    __setTheme(themePref: string): void;
  }
}

// getting and setting theme value from local storage
// we bind to window object so react can have access
window.__setTheme = function(themePref: string) {
  try {
    localStorage.setItem("theme", themePref);
  } catch (err) {}
};

window.__getTheme = function(): string {
  var themePref = "light";
  try {
    (themePref as any) = localStorage.getItem("theme");
  } catch (err) {}
  return themePref;
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
>>>>>>> 6d7705f3b4f7fe9523c8a7084a3462219aadc4a8
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
