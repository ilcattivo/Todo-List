import React from "react";

import TodoList from "./todo-list";
import AddForm from "./add-form";
import TodoFilter from "./todo-filter";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: "give you up", done: false, important: false },
    { id: 2, title: "let you down", done: false, important: false },
    { id: 3, title: "run around", done: false, important: false },
    { id: 4, title: "desert you", done: false, important: false }
  ]);
  const [filter, setFilter] = React.useState("All");
  const [term, setTerm] = React.useState("");

  function toggleTaskProp(id, prop) {
    setTodos(
      todos.map(task => {
        if (task.id === id) {
          task[prop] = !task[prop];
        }
        return task;
      })
    );
  }

  function removeTask(id) {
    setTodos(todos.filter(task => task.id !== id));
  }

  function addTask(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          done: false,
          important: false
        }
      ])
    );
  }

  const filterTodos = todos => {
    switch (filter) {
      case "All":
        return todos;
      case "Active":
        return todos.filter(task => !task.done);
      case "Done":
        return todos.filter(task => task.done);
      default:
        return todos;
    }
  };
  const searchTodos = todos => {
    return todos.filter(task =>
      task.title.toLowerCase().includes(term.toLowerCase())
    );
  };

  const visibleItems = filterTodos(searchTodos(todos));

  return (
    <div className='app'>
      <TodoFilter
        filter={filter}
        setFilter={setFilter}
        term={term}
        setTerm={setTerm}
      />
      <TodoList
        todos={visibleItems}
        toggleTaskProp={toggleTaskProp}
        removeTask={removeTask}
      />
      <AddForm addTask={addTask} />
    </div>
  );
}

export default App;
