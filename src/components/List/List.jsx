import React from 'react';
import './List.scss';
import { ListHeader } from '../ListHeader/ListHeader';
import { TaskForm } from '../TaskForm/TaskForm';
import { Task } from '../Task/Task';
import cn from 'classnames';

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
      key={t.id}
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
          isDropdown={isDropdown}
          onDrop={onDrop}
        />
        <div
          className={cn('list__body', {
            ['list__body_active']: isDropdown,
          })}>
          <div className="list__container">
            <ul className="list__list">{tasks}</ul>
          </div>
          <TaskForm onSubmit={addTask} categoryName={categoryName} />
        </div>
      </div>
    </div>
  );
};

export { List };
