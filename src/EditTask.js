
import React, { useState } from 'react';

const EditTask = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={editedTask}
        onChange={handleInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-success" type="button" onClick={handleSave}>
          Save
        </button>
        <button className="btn btn-secondary" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditTask;
