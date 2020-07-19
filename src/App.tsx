import React from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="app">
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
