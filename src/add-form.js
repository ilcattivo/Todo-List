import React, { useState } from 'react';

export default function AddForm({ addTask }) {
  const [value, setValue] = useState('');
  
  const handleInput = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTask(value);
      setValue('')
    }
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={value} placeholder="write new task" />
      <button className="btn-primary">Add</button>
    </form>
  );
}
