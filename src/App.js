import React, { useState, useEffect, useReducer } from 'react';
import logo from './assets/img/logo.svg';
import './App.scss';
import './scss/global.scss';
import './scss/main.scss';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';
import { reducer } from './store/reducer';
import {
  setTask,
  deleteTask,
  setTaskStatus,
  setCategory,
  deleteCategory,
  setCategoryDropdownStatus,
} from './store/actions';
import { initialState } from './store/initialState';

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

  const allTasks = state.tasksList.length;
  const readyTasks = state.tasksList.filter((t) => t.status === true).length;

  const onAddTask = (text, category) => {
    dispatch(setTask(text, category));
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const onChangeTaskStatus = (id, status) => {
    dispatch(setTaskStatus(id, status));
  };

  const onAddCategory = (name) => {
    dispatch(setCategory(name));
  };

  const onDeleteCategory = (id) => {
    dispatch(deleteCategory(id));
  };

  const onChangeCategoryDropdown = (id, isDropdown) => {
    dispatch(setCategoryDropdownStatus(id, isDropdown));
  };

  return (
    <div className="wrapper">
      <div className="App">
        <Header allTasks={allTasks} readyTasks={readyTasks} />
        <Board
          addCategory={onAddCategory}
          deleteCategory={onDeleteCategory}
          addTask={onAddTask}
          deleteTask={onDeleteTask}
          changeStatus={onChangeTaskStatus}
          categoryList={state.categoryList}
          tasksList={state.tasksList}
          changeCategoryDropdown={onChangeCategoryDropdown}
        />
      </div>
    </div>
  );
};

export default App;
