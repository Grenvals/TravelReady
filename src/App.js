import React, { useEffect, useReducer } from 'react';

import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import { Context } from './context';

import logo from './assets/img/logo.svg';
import './App.scss';
import './scss/global.scss';
import './scss/main.scss';

const App = () => {
  const initialStateSwitcher = JSON.parse(localStorage.getItem('state'))
    ? JSON.parse(localStorage.getItem('state'))
    : initialState;

  const [state, dispatch] = useReducer(reducer, initialStateSwitcher);

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}>
      <div className="wrapper">
        <div className="App">
          <Header />
          <Board />
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
