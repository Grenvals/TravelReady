import React, { useEffect, useState } from 'react';
import './List.scss';
import { ListHeader } from '../ListHeader/ListHeader';
import { TaskForm } from '../TaskForm/TaskForm';
import { Task } from '../Task/Task';

const List = ({ categoryName, tasksList, addTask, deleteTask, changeStatus }) => {
  const allTasks = tasksList.length;
  const readyTasks = tasksList.filter((t) => t.status === true).length;
  const tasks = tasksList.map((t) => (
    <Task
      id={t.id}
      status={t.status}
      text={t.text}
      changeStatus={changeStatus}
      deleteTask={deleteTask}
    />
  ));

  return (
    <div className="list">
      <div className="list__wrap">
        <ListHeader
          allTasks={allTasks}
          readyTasks={readyTasks}
          categoryName={categoryName}
        />
        <div className="list__container">
          <ul className="list__list">{tasks}</ul>
        </div>
        <TaskForm addTask={addTask} />
      </div>
    </div>
  );
};

export { List };
