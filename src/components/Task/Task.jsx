import React, { useState } from 'react';

import cn from 'classnames';

import { TaskForm } from '../TaskForm/TaskForm';

import deleteIcon from '../../assets/img/delete.svg';
import markIcon from '../../assets/img/check-mark.svg';
import markIconComplete from '../../assets/img/check-mark-true.svg';

import './Task.scss';

const Task = ({ id, status = false, text, changeStatus, deleteTask, changeTaskName }) => {
  const [isEditMode, setEditMode] = useState(false);
  const handleStatus = () => {
    changeStatus(id, status ? false : true);
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleTextClick = () => {
    setEditMode(true);
  };

  const handleSubmit = (taskName) => {
    setEditMode(isEditMode ? false : true);
    changeTaskName(id, taskName);
  };

  return (
    <li className="task">
      <button className="task__status" onClick={handleStatus}>
        <img src={status ? markIconComplete : markIcon} alt="#" />
      </button>
      {!isEditMode && (
        <h3
          className={cn('task__text', { ['task__text_green']: status })}
          onClick={handleTextClick}>
          {text}
        </h3>
      )}
      {isEditMode && <TaskForm onSubmit={handleSubmit} initialValue={text} onBlur />}
      {!isEditMode && (
        <button className="task__delete" onClick={handleDelete}>
          <img src={deleteIcon} alt="#" />
        </button>
      )}
    </li>
  );
};

export { Task };
