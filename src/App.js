import React from "react";
import logo from "./assets/img/logo.svg";
// import style from "./App.module.scss";
import "./App.scss";
import "./scss/global.scss";
import "./scss/main.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/Grenvals/Test/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to start
        </a>
      </header>
    </div>
  );
}

export default App;
