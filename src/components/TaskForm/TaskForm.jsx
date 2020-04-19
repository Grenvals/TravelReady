import React, { useState } from 'react';
import './TaskForm.scss';
import { Button } from '../common/Button/Button';

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');
  return (
    <div className="taskForm">
      <form
        className="taskForm__form"
        onSubmit={(event) => {
          event.preventDefault();
          // addTask(value, category);
          setValue('');
          console.log(value);
        }}>
        <input
          type="text"
          className="taskForm__input"
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <Button />
      </form>
    </div>
  );
};

export { TaskForm };
