import React, { useEffect, useState } from 'react';
import './Task.scss';
import deleteIcon from '../../assets/img/delete.svg';
import markIcon from '../../assets/img/check-mark.svg';
import markIconComplete from '../../assets/img/check-mark-true.svg';
import cn from 'classnames';

const Task = ({ status = false, text, changeStatus, deleteTask }) => {
  const handleStatus = () => {
    status ? changeStatus(false) : changeStatus(true);
  };

  const handleDelete = () => {
    deleteTask();
  };
  return (
    <li className="task">
      <button className="task__status onClick={handleStatus}">
        <img src={status ? markIconComplete : markIcon} alt="#" />
      </button>
      <div className={cn('task__text', { ['task__text_green']: status })}>{text}</div>
      <button className="task__delete" onClick={handleDelete}>
        <img src={deleteIcon} alt="#" />
      </button>
    </li>
  );
};

export { Task };
