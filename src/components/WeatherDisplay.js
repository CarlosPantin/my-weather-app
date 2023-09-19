import React from "react";
import "./WeatherDisplay.css";
import weatherIcons from "./weatherIcons";
import weatherGradients from "./weatherGradients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

function WeatherDisplay({ weatherData, onDelete, onRefresh }) {
  if (!weatherData) {
    return (
      <div>
        <p>No weather data available!</p>
      </div>
    );
  }

  const { temperature, location, conditions, iconCode } = weatherData;

  const iconUrl = weatherIcons[iconCode] || "default.png";
  const gradientBackground =
    weatherGradients[iconCode] ||
    "linear-gradient(to bottom, #0074d9, #7FDBFF)";

  const handleDelete = () => {
    onDelete(weatherData);
  };

  const handleRefresh = () => {
    onRefresh(weatherData.location);
  };

  return (
    <div className="weathergrid">
      <div
        className="weather-container"
        style={{ background: gradientBackground }}
      >
        <div className="buttons-container">
          <div className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className="refresh-button" onClick={handleRefresh}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </div>
        </div>
        <p className="location">{location}</p>
        <img className="icon" src={iconUrl} alt="Weather Icon" />
        <p className="temperature">{temperature}°C</p>
        <p className="conditions">{conditions}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
