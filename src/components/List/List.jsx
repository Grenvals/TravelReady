import React, { useEffect, useState } from 'react';
import './List.scss';
import { ListHeader } from '../ListHeader/ListHeader';
import { TaskForm } from '../TaskForm/TaskForm';

const List = ({ categoryName, allTasks, readyTasks }) => {
  return (
    <div className="list">
      <div className="list__wrap">
        <ListHeader
          allTasks={allTasks}
          readyTasks={readyTasks}
          categoryName={categoryName}
        />
        <div className="list__tasks"></div>
        <TaskForm />
      </div>
    </div>
  );
};

export { List };
