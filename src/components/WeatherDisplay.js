import React from 'react';
import './WeatherDisplay.css';
import weatherIcons from './weatherIcons';
import weatherGradients from './weatherGradients';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return (
      <div className="nodata"> 
        <p>No weather data available!</p>
      </div>
    );
  }

  const { temperature, location, conditions, iconCode } = weatherData;
  const iconUrl = weatherIcons[iconCode] || 'default.png';

  const gradientBackground = weatherGradients[iconCode] || 'linear-gradient(to bottom, #0074d9, #7FDBFF)';

  return (

  <div className="weathergrid"> 
    <div className="weather-container" style={{ background: gradientBackground }}> {/* Add the container class here */}
      <p className="location">{location}</p>
      <img className="icon" src={iconUrl} alt="Weather Icon" />
      <p className="temperature">{temperature}°C</p>
      <p className="conditions">{conditions} </p>
     
    </div>
  </div>
  );
}

export default WeatherDisplay;
