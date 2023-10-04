import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ item, onUpdate, onDelete }) {
  const { id, text, status } = item;

  const handleChange = e => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...item, status: status });
  };
  return (
    <li
      className={`${styles.todo} ${
        status === 'completed' ? styles.completed : styles.active
      }`}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={() => onDelete(item)} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
