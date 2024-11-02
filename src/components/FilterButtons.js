import React from 'react';

function FilterButtons({ filter, onChange }) {
  return (
    <div className="filter-buttons">
      {['All', 'Active', 'Inactive'].map((status) => (
        <button
          key={status}
          onClick={() => onChange(status)}
          className={filter === status ? 'active' : ''}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;

