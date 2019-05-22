import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import { ThemeProvider } from "react-jss";
import theme from "./rootTheme";
import * as serviceWorker from "./serviceWorker";
import "animate.css/animate.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowAltDown } from "@fortawesome/pro-regular-svg-icons";

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
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);

serviceWorker.register();

const message = "Let's Chat!";
const rainbow = [
  "font-weight: bold",
  "font-size: 50px",
  "color: red",
  "margin-bottom: 15px",
  "text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
].join(";");

console.log(`%c ${message}`, rainbow);
console.log("https://www.linkedin.com/in/zrclark/");
