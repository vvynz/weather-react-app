import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "../Styles/Weather.scss";

export default function WeatherInfo(props) {
  const error = props.error;
  const data = props.data;

  return (
    <div className="info-display">
      {error.length > 0 ? <p data-test="error-display" className="err-message">{error}</p> : null}
      <div data-test="date-header" className="date-display">
        <FormatDate date={data.date} />
      </div>
      <div data-test="city-header" className="city-display">
        <span className="city">{data.city}, </span>
        <span className="country">{data.country}</span>
      </div>
      <div className="row">
        <div className="col-5 temp-col">
          <div data-test="temp-header" className="temp-display">
            <Temperature celsius={data.temperature} />
          </div>
          <span data-test="feels-like"  className="feels_like">
            Feels like {Math.round(data.feels_like)}°
          </span>
          <span data-test="weather-description" className="weather-desc">{data.description}</span>
        </div>
        <div className="col-7 icon-display">
          <div className="main-icon-display">
            <WeatherIcon icon={data.icon} description={data.description} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 weather-details">
          <span>Humidity: {data.humidity}% </span>
          <span>Wind: {data.wind}km/h</span>
        </div>
        <div className="col-6 weather-details">
          <span className="temp_high">High: {Math.round(data.temp_max)}° </span>
          <span className="temp_low">Low: {Math.round(data.temp_min)}°</span>
        </div>
      </div>
    </div>
  );
}
