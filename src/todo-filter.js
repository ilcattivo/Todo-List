import React from "react";

const TodoFilter = ({ filter, setFilter, setTerm }) => {
  const buttons = ["All", "Active", "Done"].map(label => {
    const classes = ["btn-primary"];
    if (label === filter) classes.push("btn-active");
    return (
      <button
        key={label}
        type='radio'
        className={classes.join(" ")}
        onClick={() => setFilter(label)}
      >
        {label}
      </button>
    );
  });
  return (
    <div className='filter-form'>
      <input
        type='search'
        placeholder='type to search'
        onChange={e => setTerm(e.target.value)}
      />
      <div className='btn-group'>{buttons}</div>
    </div>
  );
};

export default TodoFilter;
