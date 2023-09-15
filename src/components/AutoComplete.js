import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '696f7d5f01253999ec97f2696afa5a8d';
const API_URL = 'https://api.openweathermap.org/data/2.5/find';

function AutoComplete({ onLocationSelected }) {
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const inputText = e.target.value;
    setUserInput(inputText);

    if (inputText) {
      try {
        const response = await axios.get(
          `${API_URL}?q=${inputText}&appid=${API_KEY}`
        );
        const { list } = response.data;
        setSuggestions(list);
      } catch (error) {
        console.error('Error fetching city suggestions:', error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setUserInput(suggestion.name);
    setSuggestions([]);
    onLocationSelected(suggestion.name);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        placeholder="Enter a location"
        value={userInput}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul className="suggestion-list">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AutoComplete;
