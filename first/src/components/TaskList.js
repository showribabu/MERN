// src/components/TaskList.js

/*

 Implementing CRUD Operations

Build a simple CRUD (Create, Read, Update, Delete) application to manage data.

*/


import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
  ]);
  
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) {
      const id = tasks.length + 1;
      setTasks([...tasks, { id, text: newTask }]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button  onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskList;
