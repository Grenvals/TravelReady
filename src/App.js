import React, { useState, useEffect } from 'react';
import logo from './assets/img/logo.svg';
import './App.scss';
import './scss/global.scss';
import './scss/main.scss';
import { Header } from './components/Header/Header';
import { Board } from './components/Board/Board';

const App = () => {
  useEffect(() => {
    if (localStorage.getItem('store')) {
      const localStore = JSON.parse(localStorage.getItem('store'));
      setCategoryList(localStore);
    }
  }, []);
  const [tasksList, setTasksList] = useState([
    {
      id: 1,
      status: true,
      category: 'Спорядження',
      text: 'Палатка х1',
    },
    {
      id: 2,
      status: true,
      category: 'Спорядження',
      text: 'Каремат х1',
    },
    {
      id: 3,
      status: true,
      category: 'Спорядження',
      text: 'Спальник х1',
    },
    {
      id: 4,
      status: false,
      category: 'Документи',
      text: 'Паспорт х1',
    },
    {
      id: 5,
      status: false,
      category: 'Одяг',
      text: 'Штормовка х1',
    },
    {
      id: 6,
      status: false,
      category: 'Аптечка',
      text: 'Бинт х1',
    },
    {
      id: 7,
      status: true,
      category: 'Аптечка',
      text: 'Джгут х1',
    },
    {
      id: 8,
      status: false,
      category: 'Аптечка',
      text: 'Хлоргексидин х1',
    },
    {
      id: 9,
      status: true,
      category: 'Одяг',
      text: 'Бахіли',
    },
    {
      id: 10,
      status: true,
      category: 'Одяг',
      text: 'Пончо від дощу',
    },
    {
      id: 11,
      status: true,
      category: 'Одяг',
      text: 'Трекінгові кросівки',
    },
    {
      id: 12,
      status: true,
      category: 'Одяг',
      text: 'Вітрівка х1',
    },
    {
      id: 13,
      status: true,
      category: 'Одяг',
      text: 'Шорти',
    },
    {
      id: 14,
      status: true,
      category: 'Харчування',
      text: 'Пляшка води',
    },
    {
      id: 15,
      status: false,
      category: 'Харчування',
      text: 'Снеки',
    },
  ]);

  const [categoryList, setCategoryList] = useState([
    {
      id: 1,
      name: 'Одяг',
      isDropdown: true,
    },
    {
      id: 2,
      name: 'Спорядження',
      isDropdown: true,
    },
    {
      id: 3,
      name: 'Документи',
      isDropdown: true,
    },
    {
      id: 4,
      name: 'Аптечка',
      isDropdown: true,
    },
    {
      id: 5,
      name: 'Харчування',
      isDropdown: false,
    },
  ]);

  const allTasks = tasksList.length;
  const readyTasks = tasksList.filter((t) => t.status === true).length;

  const setLocalStorage = (newCategoryList) => {
    localStorage.setItem('store', JSON.stringify(newCategoryList));
  };

  const addTask = (text, category) => {
    const newId = `f${(+new Date()).toString(16)}`;
    const newTask = {
      id: newId,
      status: false,
      category,
      text,
    };
    const newTasksList = [...tasksList];
    newTasksList.push(newTask);
    setTasksList(newTasksList);
  };

  const changeStatus = (id, status) => {
    const newTasksList = [...tasksList].map((t) => {
      if (t.id === id) {
        return { ...t, status: status };
      }
      return t;
    });
    setTasksList(newTasksList);
  };

  const changeCategoryDropdown = (id, isDropdown) => {
    const newCategoryList = [...categoryList].map((с) => {
      if (с.id === id) {
        return { ...с, isDropdown: isDropdown };
      }
      return с;
    });
    setCategoryList(newCategoryList);
  };

  const deleteTask = (id) => {
    const filterTasksList = tasksList.filter((t) => t.id !== id);
    setTasksList(filterTasksList);
  };

  const addCategory = (name) => {
    const newId = `f${(+new Date()).toString(16)}`;
    const newCategory = {
      id: newId,
      name,
      isDropdown: true,
    };
    const newCategoryList = [...categoryList];
    newCategoryList.push(newCategory);
    setCategoryList(newCategoryList);
    setLocalStorage(newCategoryList);
  };
  const deleteCategory = (id) => {
    const category = categoryList.find((c) => c.id === id);
    const filterTasksList = tasksList.filter((t) => t.category !== category.name);
    const filterCategoryList = categoryList.filter((c) => c.id !== id);
    setCategoryList(filterCategoryList);
    setTasksList(filterTasksList);
  };

  return (
    <div className="wrapper">
      <div className="App">
        <Header allTasks={allTasks} readyTasks={readyTasks} />
        <Board
          addCategory={addCategory}
          deleteCategory={deleteCategory}
          addTask={addTask}
          deleteTask={deleteTask}
          changeStatus={changeStatus}
          categoryList={categoryList}
          tasksList={tasksList}
          changeCategoryDropdown={changeCategoryDropdown}
        />
      </div>
    </div>
  );
};

export default App;
