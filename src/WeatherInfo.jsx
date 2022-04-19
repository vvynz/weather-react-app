import React from "react";
import FormatDate from "./FormateDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{weatherData.city}</h1>
        <FormatDate date={weatherData.date} />
        <p>{weatherData.description}</p>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />
            {Math.round(weatherData.temperature)}°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
    </div>
  );
}