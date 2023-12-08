import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <form>
      <label className={css.SrchForm}>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Filter;