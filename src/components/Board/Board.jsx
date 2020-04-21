import React, { useEffect, useState } from 'react';
import './Board.scss';
import { List } from '../List/List';

const Board = () => {
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
  ]);

  const categoryList = [
    {
      id: 1,
      name: 'Одяг',
    },
    {
      id: 2,
      name: 'Спорядження',
    },
    {
      id: 3,
      name: 'Документи',
    },
    {
      id: 4,
      name: 'Аптечка',
    },
  ];

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
    console.log(newTasksList);
    console.log(status);
    setTasksList(newTasksList);
  };

  const deleteTask = (id) => {
    const filterTasksList = tasksList.filter((t) => t.id !== id);
    setTasksList(filterTasksList);
  };

  const lists = categoryList.map((c) => {
    const filterTasksList = tasksList.filter((t) => c.name === t.category);
    return (
      <List
        id={c.id}
        categoryName={c.name}
        tasksList={filterTasksList}
        addTask={addTask}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
    );
  });
  return (
    <div className="board">
      <div className="container">
        <div className="board__wrap">{lists}</div>
      </div>
    </div>
  );
};

export { Board };
