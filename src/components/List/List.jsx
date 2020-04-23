import React, { useState } from 'react';
import './List.scss';
import { ListHeader } from '../ListHeader/ListHeader';
import { TaskForm } from '../TaskForm/TaskForm';
import { Task } from '../Task/Task';

const List = ({
  categoryName,
  id,
  deleteCategory,
  tasksList,
  addTask,
  deleteTask,
  changeStatus,
  isDropdown,
  changeCategoryDropdown,
}) => {
  const onDrop = () => {
    changeCategoryDropdown(id, isDropdown ? false : true);
  };
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
          categoryId={id}
          deleteCategory={deleteCategory}
          onDrop={onDrop}
        />
        {isDropdown && (
          <div className="list__container">
            <ul className="list__list">{tasks}</ul>
          </div>
        )}
        {isDropdown && <TaskForm onSubmit={addTask} categoryName={categoryName} />}
      </div>
    </div>
  );
};

export { List };
