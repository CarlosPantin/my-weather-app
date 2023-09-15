import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setQuery(inputText);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter a location"
        value={query}
        onChange={handleInputChange}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
