import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { ThemeProvider } from "react-jss";
import { BrowserRouter } from "react-router-dom";
import theme from "./rootStyles";
import * as serviceWorker from "./serviceWorker";

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
  var themePref = "dark";
  try {
    (themePref as any) = localStorage.getItem("theme");
  } catch (err) {}
  return themePref;
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("app")
);

serviceWorker.register();

const message = "Let's Chat!";
const styles = [
  "background: linear-gradient(#348F50, #56B4D3)",
  "color: #FFF",
  "font-size: 70px",
  "line-height: 200px"
].join(";");

console.log(`%c ${message}`, styles);
