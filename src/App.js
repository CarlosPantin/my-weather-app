import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const API_KEY = '696f7d5f01253999ec97f2696afa5a8d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (location) => {
    if (location) {
      const apiUrl = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;

      axios.get(apiUrl)
        .then((response) => {
          const { data } = response;
          console.log('API Response:', data);
          setWeatherData({
            temperature: data.main.temp,
            conditions: data.weather[0].description,
            location: data.name,
            iconCode: data.weather[0].icon,
          });
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
         
        });
    }
  };

  return (
    <div className="weather-app">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;