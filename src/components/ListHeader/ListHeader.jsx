import React, { useEffect, useState } from 'react';
import './ListHeader.scss';
import { CircularProgressBar } from '../common/ProgressBar/ProgressBar';

const ListHeader = ({
  categoryName,
  categoryId,
  allTasks,
  readyTasks,
  deleteCategory,
}) => {
  const handleDelete = () => {
    deleteCategory(categoryId);
  };
  return (
    <div className="listHeader">
      <h2 className="listHeader__title">{categoryName}</h2>
      <CircularProgressBar
        className="listHeader__progressBar"
        strokeWidth="6"
        sqSize="50"
        allTasks={allTasks}
        readyTasks={readyTasks}
      />
      <button className="listHeader__delete delete" onClick={handleDelete}></button>
    </div>
  );
};

export { ListHeader };
