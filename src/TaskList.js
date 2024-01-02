
import React, { useState } from 'react';
import EditTask from './EditTask';


const TaskList = ({ tasks, removeTask, editTask }) => {
  const [editIndex, setEditIndex] = useState(null);

  const handleRemove = (index) => {
    removeTask(index);
    if (editIndex === index) {
      setEditIndex(null);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaveEdit = (index, newText) => {
    editTask(index, newText);
    setEditIndex(null);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
  };

  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {editIndex === index ? (
            <EditTask
              task={task}
              onSave={(newText) => handleSaveEdit(index, newText)}
              onCancel={handleCancelEdit}
            />
          ) : (
            <>
              {task}
              <div>
                <button className="btn btn-danger" onClick={() => handleRemove(index)}>
                  Remove
                </button>
                <button className="btn btn-warning ml-2" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
