import React, { useState } from 'react';

import { Button } from '../common/Button/Button';

import './TaskForm.scss';

const TaskForm = ({ onSubmit, categoryName, initialValue, onBlur }) => {
  const [inputValue, setInputValue] = useState(initialValue ? initialValue : '');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleBlur = (e) => {
    if (onBlur) {
      handleSubmit(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length > 0) {
      onSubmit(inputValue, categoryName && categoryName);
      setInputValue('');
    }
  };
  return (
    <div className="taskForm">
      <form className="taskForm__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="taskForm__input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={inputValue}
        />
        <Button />
      </form>
    </div>
  );
};

export { TaskForm };
