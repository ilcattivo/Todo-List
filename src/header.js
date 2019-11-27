import React from "react";

const Header = ({ done, left }) => {
  return (
    <header className='header'>
      <h2>Todo App</h2>
      <div className='header-status'>
        <span style={{ marginRight: "4px" }}>done: {done}</span>
        <span>left: {left}</span>
      </div>
    </header>
  );
};

export default Header;
