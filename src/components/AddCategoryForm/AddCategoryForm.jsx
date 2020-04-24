import React, { useState } from 'react';

import { Button } from '../common/Button/Button';
import { TaskForm } from '../TaskForm/TaskForm';

import './AddCategoryForm.scss';

const AddCategoryForm = ({ addCategory }) => {
  const [isEditMode, setValue] = useState(false);

  const handleClick = () => {
    isEditMode ? setValue(false) : setValue(true);
  };

  return (
    <div className="addCategory">
      {isEditMode && <TaskForm onSubmit={addCategory} />}
      <Button
        className={'addCategory__button'}
        isActive={isEditMode ? false : true}
        onClick={handleClick}
      />
    </div>
  );
};

export { AddCategoryForm };
