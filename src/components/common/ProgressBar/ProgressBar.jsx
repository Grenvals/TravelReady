import React from 'react';

import cn from 'classnames';

import './ProgressBar.scss';

const CircularProgressBar = ({
  className,
  sqSize,
  strokeWidth,
  allTasks,
  readyTasks,
}) => {
  const percentage = allTasks > 0 ? (readyTasks / allTasks) * 100 : 0;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className={cn('progressBar', { [className]: className })}>
      <svg
        className="progressBar__progress"
        cwidth={sqSize}
        height={sqSize}
        viewBox={viewBox}>
        <circle
          className="progressBar__background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={cn('progressBar__circleProgress', {
            ['progressBar__circleProgress_complete']: percentage === 100,
          })}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <p className="progressBar__text">{`${readyTasks}/${allTasks}`}</p>
    </div>
  );
};

export { CircularProgressBar };
