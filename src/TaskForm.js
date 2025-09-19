import React, { useState } from 'react';

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.trim() === '') {
      setError('Please enter a task.');
      return;
    }

    // Success: clear the error and proceed with submission logic
    setError('');
    console.log('Task submitted successfully:', task);

    // After a successful submission, you might clear the input
    setTask('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add Task</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TaskForm;