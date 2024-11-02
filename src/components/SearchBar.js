import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
    <button className="search-button">
      <FontAwesomeIcon icon={faSearch} />
    </button>
    <input 
      type="text" 
      placeholder="Search..." 
      className="search-input" 
      value={value}
      onChange={onChange} 
    />
  </div>
  )
}

export default SearchBar;
