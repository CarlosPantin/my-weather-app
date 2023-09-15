import React from 'react';
import './WeatherDisplay.css';
import weatherIcons from './weatherIcons';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    // Handle the case where weatherData is null or undefined
    return (
      <div className="weather-display">
        <p>No weather data available!</p>
      </div>
    );
  }

  const { temperature, location, conditions, iconCode } = weatherData;

  // Use the iconCode to get the corresponding icon URL from your mapping
  const iconUrl = weatherIcons[iconCode] || 'default.png';

  return (
    <div className="weather-display">
      <img src={iconUrl} alt="Weather Icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="location">{location}</p>
      <p className="conditions">{conditions}</p>
    </div>
  );
}

export default WeatherDisplay;
