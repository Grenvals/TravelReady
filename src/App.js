import React from 'react';
import logo from './assets/img/logo.svg';
// import style from "./App.module.scss";
import './App.scss';
import './scss/global.scss';
import './scss/main.scss';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';

const App = () => (
  <div className="wrapper">
    <div className="App">
      <Header />
      <Board />
    </div>
  </div>
);

export default App;
