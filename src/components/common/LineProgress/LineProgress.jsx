import React from 'react';

import './LineProgress.scss';

const LineProgress = ({ readyTasks, allTasks }) => {
  const percentage = allTasks > 0 ? (readyTasks / allTasks) * 100 : 0;
  const progresLineStyle = { width: percentage + '%' };
  return (
    <div className="lineProgress">
      <div className="lineProgress__wrap">
        <div className="lineProgress__line" style={progresLineStyle}></div>
      </div>
      <p className="lineProgress__text">{`${readyTasks}/${allTasks}`}</p>
    </div>
  );
};

export { LineProgress };
