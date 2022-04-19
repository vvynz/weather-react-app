import React from "react";
import FormatDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  const data = props.data;

  return (
    <div>
      <h1>{data.city}</h1>
        <FormatDate date={data.date} />
        <p>{data.description}</p>
        <div className="row">
          <div className="col-6">
            <WeatherIcon icon={data.icon}/>
            {Math.round(data.temperature)}°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {data.precipitation}%</li>
              <li>Humidity: {data.humidity}%</li>
              <li>wind: {data.wind}km/h</li>
            </ul>
          </div>
        </div>
    </div>
  );
}