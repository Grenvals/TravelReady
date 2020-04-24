import React, { useContext } from 'react';

import { AddCategoryForm } from '../AddCategoryForm/AddCategoryForm';
import { Context } from '../../context';
import { List } from '../List/List';
import {
  setCategory,
  deleteCategory,
  setTask,
  deleteTask,
  setTaskStatus,
  setTaskName,
  setCategoryDropdownStatus,
} from '../../store/actions';

import './Board.scss';

const Board = () => {
  const { state, dispatch } = useContext(Context);

  const onAddCategory = (name) => {
    dispatch(setCategory(name));
  };

  const onDeleteCategory = (id) => {
    const category = state.categoryList.find((c) => c.id === id);
    dispatch(deleteCategory(id));
  };

  const onAddTask = (text, category) => {
    dispatch(setTask(text, category));
  };

  const onDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const onChangeTaskName = (id, textValue) => {
    dispatch(setTaskName(id, textValue));
  };

  const onChangeTaskStatus = (id, status) => {
    dispatch(setTaskStatus(id, status));
  };

  const onChangeCategoryDropdown = (id, isDropdown) => {
    dispatch(setCategoryDropdownStatus(id, isDropdown));
  };

  const lists = state.categoryList.map((c) => {
    const filterTasksList = state.tasksList.filter((t) => c.name === t.category);
    return (
      <List
        key={c.id}
        id={c.id}
        categoryName={c.name}
        deleteCategory={onDeleteCategory}
        tasksList={filterTasksList}
        addTask={onAddTask}
        deleteTask={onDeleteTask}
        changeStatus={onChangeTaskStatus}
        isDropdown={c.isDropdown}
        changeCategoryDropdown={onChangeCategoryDropdown}
        changeTaskName={onChangeTaskName}
      />
    );
  });

  return (
    <div className="board">
      <div className="container">
        <div className="board__wrap">
          {lists}
          <AddCategoryForm addCategory={onAddCategory} />
        </div>
      </div>
    </div>
  );
};

export { Board };
