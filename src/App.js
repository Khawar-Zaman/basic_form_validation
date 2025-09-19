/* src/App.js */

import React from 'react';
import TaskForm from './TaskForm';
import './App.css'; // Assuming you have some CSS file

function App() {
  return (
    <div className="App">
      <h1>My Task App</h1>
      <TaskForm />
    </div>
  );
}

export default App;