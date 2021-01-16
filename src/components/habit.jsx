import React, { memo } from 'react';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = (habit) => {
    onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    onDecrement(habit);
  };

  const handleDelete = (habit) => {
    onDelete(habit);
  };

  console.log('habit');

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button
        className="habit-button habit-increase"
        onClick={() => handleIncrement(habit)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={() => handleDecrement(habit)}
      >
        <i className="fas fa-minus-square"></i>
      </button>
      <button
        className="habit-button habit-delete"
        onClick={() => handleDelete(habit)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
