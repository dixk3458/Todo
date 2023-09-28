import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ item, onUpdate, onDelete }) {
  const { id, text, status } = item;

  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...item, status: status });
  };
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <button onClick={() => onDelete(item)}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
