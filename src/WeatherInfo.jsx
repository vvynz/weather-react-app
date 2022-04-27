import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./Weather.scss";

export default function WeatherInfo(props) {
  const data = props.data;
  // console.log("temp data", data);

  return (
    <div className="info-display">
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
          <span className="feels_like">Feels like {Math.round(data.feels_like)}°</span>
          {/* <div className="weather-desc">{data.description}</div> */}
        </div>
        <div className="col-7 icon-display">
          <div className="main-icon-display">
            <WeatherIcon icon={data.icon} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 weather-details">
          <span>Humidity: {data.humidity}% </span>
          <span>Wind: {data.wind}km/h</span>
        </div>
        <div className="col-6 weather-details">
          <span>High: {Math.round(data.temp_max)}° </span>
          <span>Low: {Math.round(data.temp_min)}°</span>
        </div>
        {/* <div className="col-7 icon-col">
          <div className="main-icon-display">
            <WeatherIcon icon={data.icon} />
          </div>
          <Temperature celsius={data.temperature}/>
        </div> */}
      </div>
    </div>
  );
}
