import React from "react";

function TodoItem({ task, toggleTaskProp, removeTask }) {
  const { id, title, done, important } = task;
  const classes = ["todo-item_title"];
  if (important) classes.push("important");
  if (done) classes.push("done");
  return (
    <React.Fragment>
      <span
        className={classes.join(" ")}
        onClick={() => toggleTaskProp(id, "done")}
      >
        {title}
      </span>
      <div>
        <button
          className='btn-primary btn-icon'
          style={{ marginRight: "3px" }}
          onClick={() => toggleTaskProp(id, "important")}
        >
          &#33;
        </button>
        <button className='btn-danger btn-icon' onClick={() => removeTask(id)}>
          &#10005;
        </button>
      </div>
    </React.Fragment>
  );
}

export default TodoItem;
