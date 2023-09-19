import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onAdd }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value) {
      onAdd(value);
      setValue("");
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
