import React from 'react';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <span className={styles.icon}>
        <button
          className={styles.darkModeBtn}
          onClick={() => {
            toggleDarkMode();
          }}
        >
          {!darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
      </span>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
