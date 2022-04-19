import React from "react";
import FormatDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  const data = props.data;

  return (
    <div>
      <h1>{data.city}</h1>
      <FormatDate date={data.date} />
      <p>{data.description}</p>
      <div className="row">
        <div className="col-6">
          <WeatherIcon icon={data.icon} />
          {Math.round(data.temperature)}°C
        </div>
        <div className="col-6">
          <ul>
            <li>
              <ReactAnimatedWeather
                icon="SLEET"
                color="GREY"
                size={18}
                animate={true}
              />
              : {data.precipitation}%
            </li>
            <li>Humidity: {data.humidity}%</li>
            <li>
              <ReactAnimatedWeather
                icon="WIND"
                color="GREY"
                size={18}
                animate={true}
              />
              : {data.wind}km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
