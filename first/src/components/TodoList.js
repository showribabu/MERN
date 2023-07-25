// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
    { id: 3, text: 'Deploy the app' },
  ]);

  var c=0;
  const inc=()=>{
c=c+1;
    setTodos([...todos, { id:c, text: 'Newly added' }]);
}


  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.id}{todo.text}</li>
        ))}
      </ul>
      <button onClick={inc}>Add</button>

    </div>
  );
};

export default TodoList;
