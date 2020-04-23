import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { LineProgress } from '../common/LineProgress/LineProgress';

const Header = ({ allTasks, readyTasks }) => {
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
