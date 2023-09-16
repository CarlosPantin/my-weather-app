import React, { useState } from 'react';
import './SearchBar.css'; // You may need to create a separate CSS file for styling.

function SearchBar({ onAdd }) {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value) {
      onAdd(value);
      setValue(''); // Clear the input field after adding a city
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a location"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default SearchBar;
