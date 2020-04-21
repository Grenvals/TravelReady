import React, { useState } from 'react';
import './TaskForm.scss';
import { Button } from '../common/Button/Button';

const TaskForm = ({ onSubmit, categoryName }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue, categoryName && categoryName);
    setInputValue('');
  };
  return (
    <div className="taskForm">
      <form className="taskForm__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="taskForm__input"
          onChange={handleChange}
          value={inputValue}
        />
        <Button />
      </form>
    </div>
  );
};

export { TaskForm };
