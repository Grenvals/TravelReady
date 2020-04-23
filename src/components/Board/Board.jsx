import React, { useState } from 'react';
import './Board.scss';
import { List } from '../List/List';
import { AddCategoryForm } from '../AddCategoryForm/AddCategoryForm';

const Board = ({
  addCategory,
  deleteCategory,
  addTask,
  deleteTask,
  changeStatus,
  categoryList,
  tasksList,
  changeCategoryDropdown,
}) => {
  const lists = categoryList.map((c) => {
    const filterTasksList = tasksList.filter((t) => c.name === t.category);
    return (
      <List
        id={c.id}
        categoryName={c.name}
        deleteCategory={deleteCategory}
        tasksList={filterTasksList}
        addTask={addTask}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
        isDropdown={c.isDropdown}
        changeCategoryDropdown={changeCategoryDropdown}
      />
    );
  });
  return (
    <div className="board">
      <div className="container">
        <div className="board__wrap">
          {lists}
          <AddCategoryForm addCategory={addCategory} />
        </div>
      </div>
    </div>
  );
};

export { Board };
