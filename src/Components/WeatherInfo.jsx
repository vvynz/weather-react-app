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
      {error.length > 0 ? <p className="err-message">{error}</p> : null}
      <div className="date-display">
        <FormatDate date={data.date} />
      </div>
      <div className="city-display">
        <span className="city">{data.city}, </span>
        <span className="country">{data.country}</span>
      </div>
      <div className="row">
        <div className="col-5 temp-col">
          <div className="temp-display">
            <Temperature celsius={data.temperature} />
          </div>
          <span className="feels_like">
            Feels like {Math.round(data.feels_like)}°
          </span>
          <span className="weather-desc">{data.description}</span>
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
