import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App.js";
import { ThemeProvider } from "react-jss";
import theme from "./rootStyles";

// getting and setting theme value from local storage
// we bind to window object so react can have access
window.__setTheme = function(themePref) {
  try {
    localStorage.setItem("theme", themePref);
  } catch (err) {}
};
window.__getTheme = function() {
  var themePref = "dark";
  try {
    themePref = localStorage.getItem("theme");
  } catch (err) {}
  return themePref;
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
