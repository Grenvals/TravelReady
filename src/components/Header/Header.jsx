import React, { useContext } from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { LineProgress } from '../common/LineProgress/LineProgress';
import { Context } from '../../context';

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
