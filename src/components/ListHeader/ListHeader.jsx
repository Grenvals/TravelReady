import React from 'react';

import cn from 'classnames';

import { CircularProgressBar } from '../common/ProgressBar/ProgressBar';

import './ListHeader.scss';

const ListHeader = ({
  categoryName,
  categoryId,
  allTasks,
  readyTasks,
  deleteCategory,
  onDrop,
  isDropdown,
}) => {
  const handleDelete = () => {
    deleteCategory(categoryId);
  };
  return (
    <div className="listHeader">
      <div className="listHeader__wrap" onClick={onDrop}>
        <div
          className={cn('listHeader__dropArrow', {
            ['listHeader__dropArrow_active']: isDropdown,
          })}></div>
        <h2 className="listHeader__title">{categoryName}</h2>
        <CircularProgressBar
          className="listHeader__progressBar"
          strokeWidth="6"
          sqSize="50"
          allTasks={allTasks}
          readyTasks={readyTasks}
        />
      </div>
      <button className="listHeader__delete delete" onClick={handleDelete}></button>
    </div>
  );
};

export { ListHeader };
