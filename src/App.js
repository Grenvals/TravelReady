import React, { useEffect, useReducer } from 'react';
import logo from './assets/img/logo.svg';
import './App.scss';
import './scss/global.scss';
import './scss/main.scss';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import { reducer } from './store/reducer';
import { initialState } from './store/initialState';
import { Context } from './context';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   if (localStorage.getItem('store')) {
  //     const initialState = JSON.parse(localStorage.getItem('store'));
  //     setCategoryList(localStore);
  //   }
  // }, []);
  // const setLocalStorage = (newCategoryList) => {
  //   localStorage.setItem('store', JSON.stringify(newCategoryList));
  // };

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
