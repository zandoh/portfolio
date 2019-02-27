import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App.js";
import { ThemeProvider } from "react-jss";
import theme from "./rootStyles.js";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
