import React from 'react';

import TodoItem from './todo-item';

function TodoList({ todos, toggleTaskProp, removeTask }) {
  return (
    <ul className='todo-list'>
      {
          todos.map(task => {
          return (
            <li
              key={task.id}
              className='todo-list_item'
            >
              {<TodoItem
                  task={task}
                  toggleTaskProp={toggleTaskProp}
                  removeTask={removeTask} />}
            </li>);
        })
      }
    </ul>
  );
}

export default TodoList;