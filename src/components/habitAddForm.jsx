import React, { memo, useRef } from 'react';

const HabitAddForm = memo(({ onAdd }) => {
  const inputRef = useRef();
  const formRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };
  console.log('HabitAddForm');

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
