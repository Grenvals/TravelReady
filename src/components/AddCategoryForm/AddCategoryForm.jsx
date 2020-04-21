import React, { useState } from 'react';
import './AddCategoryForm.scss';
import { TaskForm } from '../TaskForm/TaskForm';
import { Button } from '../common/Button/Button';

const AddCategoryForm = ({ addCategory }) => {
  const [value, setValue] = useState(false);
  const handleClick = () => {
    value ? setValue(false) : setValue(true);
  };
  return (
    <div className="addCategory">
      {value && <TaskForm onSubmit={addCategory} />}
      <Button className={'addCategory__button'} onClick={handleClick} />
    </div>
  );
};

export { AddCategoryForm };
