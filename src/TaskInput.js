
import React, { useState } from 'react';


const TaskInput = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" type="button" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;
