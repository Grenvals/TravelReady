import React, { useEffect, useState } from 'react';
import './Board.scss';
import { List } from '../List/List';

const Board = () => {
  return (
    <div className="board">
      <div className="container">
        <div className="board__wrap">
          <List allTasks={6} readyTasks={2} categoryName={'Одяг'} />
          <List allTasks={8} readyTasks={5} categoryName={'Спорядження'} />
          <List allTasks={7} readyTasks={7} categoryName={'Документи'} />
          <List allTasks={6} readyTasks={1} categoryName={'Аптечка'} />
        </div>
      </div>
    </div>
  );
};

export { Board };
