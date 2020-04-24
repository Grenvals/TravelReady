import React, { useContext } from 'react';

import { Context } from '../../context';
import { Logo } from '../Logo/Logo';
import { LineProgress } from '../common/LineProgress/LineProgress';

import './Header.scss';

const Header = () => {
  const { state } = useContext(Context);

  const allTasks = state.tasksList.length;
  const readyTasks = state.tasksList.filter((t) => t.status === true).length;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Logo />
          <LineProgress allTasks={allTasks} readyTasks={readyTasks} />
        </div>
      </div>
    </header>
  );
};

export { Header };
