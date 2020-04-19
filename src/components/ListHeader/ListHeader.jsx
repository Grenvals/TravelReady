import React, { useEffect, useState } from 'react';
import './ListHeader.scss';
import { CircularProgressBar } from '../common/ProgressBar/ProgressBar';

const ListHeader = ({ categoryName, allTasks, readyTasks }) => {
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
    </div>
  );
};

export { ListHeader };
