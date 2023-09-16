import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const API_KEY = '696f7d5f01253999ec97f2696afa5a8d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  
  const handleAdd = (location) => {
    if (location) {
      const apiUrl = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;

      axios.get(apiUrl)
        .then((response) => {
          const { data } = response;
          console.log('API Response:', data);
          const newWeatherData = [
            ...weatherData,
            {
              temperature: data.main.temp,
              conditions: data.weather[0].description,
              location: data.name,
              iconCode: data.weather[0].icon,
            },
          ];
          setWeatherData(newWeatherData);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  return (
    <div className="weather-app">
      <SearchBar onAdd={handleAdd} />
      <div className=" container">
        {weatherData.map((data, index) => (
          <WeatherDisplay key={index} weatherData={data} />
        ))}
      </div>
    </div>
  );
}

export default App;






