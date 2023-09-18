import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

const API_KEY = '696f7d5f01253999ec97f2696afa5a8d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const storedWeatherData = localStorage.getItem('weatherData');
    if (storedWeatherData) {
      setWeatherData(JSON.parse(storedWeatherData));
    }
  }, []);

  const handleAdd = (location) => {
    if (location) {
      const apiUrl = `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`;

      axios.get(apiUrl)
        .then((response) => {
          const { data } = response;
          console.log('API Response:', data);

          const newCard = {
            temperature: data.main.temp,
            conditions: data.weather[0].description,
            location: data.name,
            iconCode: data.weather[0].icon,
          };

          
          const updatedWeatherData = [...weatherData, newCard];
          setWeatherData(updatedWeatherData);

       
          localStorage.setItem('weatherData', JSON.stringify(updatedWeatherData));
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  };

  const handleDelete = (cardToDelete) => {
    // Filter the weatherData array to remove the card
    const updatedWeatherData = weatherData.filter((card) => card !== cardToDelete);
    setWeatherData(updatedWeatherData);

    // Save the updated data to local storage
    localStorage.setItem('weatherData', JSON.stringify(updatedWeatherData));
  };

  return (
    <div className="weather-app">
      <SearchBar onAdd={handleAdd} />
      <div className="container">
        {weatherData.map((data, index) => (
          <WeatherDisplay 
          key={index} 
          weatherData={data} 
          onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;






